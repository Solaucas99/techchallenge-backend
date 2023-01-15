import { PrismaClient } from '@prisma/client';

import { IRankingRepository } from '../interfaces/IRankingRepository';
import { IRanking } from '@interfaces/IRanking';
import { IRanking_Response } from '@entities/IRanking_Response';

export class RankingRepository implements IRankingRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async readRanking({
    quarter,
    ranking_type,
  }: IRanking): Promise<IRanking_Response[]> {
    try {
      const year = new Date().getFullYear();
      const quarterDateRange = {
        1: {
          gte: `${year}-01-01`,
          lte: `${year}-03-31`,
        },
        2: {
          gte: `${year}-04-01`,
          lte: `${year}-06-30`,
        },
        3: {
          gte: `${year}-07-01`,
          lte: `${year}-09-30`,
        },
        4: {
          gte: `${year}-10-01`,
          lte: `${year}-12-31`,
        },
      };

      const query = `SELECT u.id AS user_id, u.username AS username, ${
        ranking_type === 'quiz'
          ? 'SUM(s.correct_answers_pontuation)'
          : 'SUM(c.pontuation)'
      } AS score FROM users AS u
      INNER JOIN ${ranking_type}_solutions AS s ON s.user_id = u.id INNER JOIN ${ranking_type}_challenges AS c ON c.id = s.${ranking_type}_challenge_id
      WHERE s.createdAt >= '${
        quarterDateRange[quarter].gte
      }' AND s.createdAt <= '${quarterDateRange[quarter].lte}'
      GROUP BY u.id ORDER BY u.id DESC;`;

      const result: IRanking_Response[] = await this.prisma.$queryRawUnsafe(
        query,
      );

      return result.sort(
        (prevValue, nextValue) => nextValue.score - prevValue.score,
      );
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
