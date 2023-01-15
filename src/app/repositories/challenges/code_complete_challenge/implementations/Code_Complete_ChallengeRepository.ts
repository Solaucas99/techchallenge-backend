import { PrismaClient } from '@prisma/client';

import { ICode_Complete_Challenge } from '@entities/ICode_Complete_Challenge';
import { ICode_Complete_ChallengeRepository } from '../interfaces/ICode_Complete_ChallengeRepository';

export class Code_Complete_ChallengeRepository
  implements ICode_Complete_ChallengeRepository
{
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  public async createCodeCompleteChallenge({
    id,
    answer_1,
    answer_2,
    answer_3,
    challenge_archive,
    instruction,
    pontuation,
    title,
  }: ICode_Complete_Challenge): Promise<ICode_Complete_Challenge | void> {
    try {
      const result = await this.prisma.code_Complete_Challenge.create({
        data: {
          id: id as string,
          instruction: instruction as string,
          title: title as string,
          answer_1: answer_1 as string,
          answer_2: answer_2 as string,
          answer_3: answer_3 as string,
          challenge_archive: challenge_archive as string,
          pontuation: pontuation as number,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async updateCodeCompleteChallenge({
    id,
    answer_1,
    answer_2,
    answer_3,
    challenge_archive,
    pontuation,
    instruction,
    title,
  }: ICode_Complete_Challenge): Promise<ICode_Complete_Challenge | void> {
    try {
      const result = await this.prisma.code_Complete_Challenge.update({
        where: {
          id,
        },
        data: {
          instruction,
          title,
          answer_1,
          answer_2,
          answer_3,
          challenge_archive,
          pontuation,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readCodeCompleteChallenge({
    id,
  }: ICode_Complete_Challenge): Promise<ICode_Complete_Challenge | void> {
    try {
      const result = await this.prisma.code_Complete_Challenge.findUnique({
        where: {
          id,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readAllCodeCompleteChallenge(): Promise<
    ICode_Complete_Challenge[] | void
  > {
    try {
      const result = await this.prisma.code_Complete_Challenge.findMany({
        select: {
          id: true,
          challenge_archive: true,
          instruction: true,
          pontuation: true,
          title: true,
          createdAt: true,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readCodeCompleteChallengesUncompletedByUser(
    user_id: string,
  ): Promise<ICode_Complete_Challenge[] | void> {
    try {
      const result = await this.prisma.code_Complete_Challenge.findMany({
        where: {
          NOT: {
            solutions_submitted: {
              some: {
                user_id,
              },
            },
          },
        },
        select: {
          id: true,
          challenge_archive: true,
          instruction: true,
          pontuation: true,
          title: true,
          createdAt: true,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async deleteCodeCompleteChallenge({
    id,
  }: ICode_Complete_Challenge): Promise<ICode_Complete_Challenge | void> {
    try {
      const result = await this.prisma.code_Complete_Challenge.delete({
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
