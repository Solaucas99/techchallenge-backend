import { PrismaClient } from '@prisma/client';

import { IQuiz_Challenge } from '@entities/IQuiz_Challenge';
import { IQuiz_ChallengeRepository } from '../interfaces/IQuiz_ChallengeRepository';

export class Quiz_ChallengeRepository implements IQuiz_ChallengeRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  public async createQuizChallenge({
    instruction,
    title,
  }: IQuiz_Challenge): Promise<IQuiz_Challenge | void> {
    try {
      const result = await this.prisma.quiz_Challenge.create({
        data: {
          instruction: instruction as string,
          title: title as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async updateQuizChallenge({
    id,
    instruction,
    title,
  }: IQuiz_Challenge): Promise<IQuiz_Challenge | void> {
    try {
      const result = await this.prisma.quiz_Challenge.update({
        where: {
          id,
        },
        data: {
          instruction,
          title,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readQuizChallenge({
    id,
  }: IQuiz_Challenge): Promise<IQuiz_Challenge | void> {
    try {
      const result = await this.prisma.quiz_Challenge.findUnique({
        where: {
          id,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readAllQuizChallenge(): Promise<IQuiz_Challenge[] | void> {
    try {
      const result = await this.prisma.quiz_Challenge.findMany({
        where: {
          asks: {
            some: {},
          },
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readQuizChallengesUncompletedByUser(
    user_id: string,
  ): Promise<IQuiz_Challenge[] | void> {
    try {
      const result = await this.prisma.quiz_Challenge.findMany({
        where: {
          asks: {
            some: {},
          },
          NOT: {
            solutions_submitted: {
              some: {
                user_id,
              },
            },
          },
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async deleteQuizChallenge({
    id,
  }: IQuiz_Challenge): Promise<IQuiz_Challenge | void> {
    try {
      const result = await this.prisma.quiz_Challenge.delete({
        where: {
          id,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
