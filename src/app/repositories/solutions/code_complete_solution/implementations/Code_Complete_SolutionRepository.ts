import { Prisma, PrismaClient } from '@prisma/client';

import { ICode_Complete_Solution } from '@entities/ICode_Complete_Solution';
import { ICode_Complete_SolutionRepository } from '../interfaces/ICode_Complete_SolutionRepository';

export class Code_Complete_SolutionRepository
  implements ICode_Complete_SolutionRepository
{
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  public async createCode_CompleteSolution({
    user_id,
    answer_1,
    answer_2,
    answer_3,
    code_complete_challenge_id,
  }: ICode_Complete_Solution): Promise<ICode_Complete_Solution | void> {
    try {
      const result = await this.prisma.code_Complete_Solution.create({
        data: {
          user_id: user_id as string,
          answer_1: answer_1 as string,
          answer_2: answer_2 as string,
          answer_3: answer_3 as string,
          code_complete_challenge_id: code_complete_challenge_id as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readCode_CompleteSolution({
    id,
  }: ICode_Complete_Solution): Promise<ICode_Complete_Solution | void> {
    try {
      const result = await this.prisma.code_Complete_Solution.findUnique({
        where: {
          id,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readCode_CompleteSolutionsByUser({
    user_id,
  }: ICode_Complete_Solution): Promise<ICode_Complete_Solution[] | void> {
    try {
      const result = await this.prisma.code_Complete_Solution.findMany({
        where: {
          user_id,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readCode_CompleteSolutionsByChallengeAndUser({
    user_id,
    code_complete_challenge_id,
  }: ICode_Complete_Solution): Promise<ICode_Complete_Solution[] | void> {
    try {
      const result = await this.prisma.code_Complete_Solution.findMany({
        where: {
          user_id,
          code_complete_challenge_id,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async deleteCode_CompleteSolutionsByChallenge({
    code_complete_challenge_id,
  }: ICode_Complete_Solution): Promise<Prisma.BatchPayload | void> {
    try {
      const result = await this.prisma.code_Complete_Solution.deleteMany({
        where: {
          code_complete_challenge_id,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readAllCode_CompleteSolution(): Promise<
    ICode_Complete_Solution[] | void
  > {
    try {
      const result = await this.prisma.code_Complete_Solution.findMany();

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
