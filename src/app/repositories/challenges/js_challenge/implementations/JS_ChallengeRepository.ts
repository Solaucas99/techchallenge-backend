import { PrismaClient } from '@prisma/client';

import { IJS_Challenge } from '@entities/IJS_Challenge';
import { IJS_ChallengeRepository } from '../interfaces/IJS_ChallengeRepository';

export class JS_ChallengeRepository implements IJS_ChallengeRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  public async createJSChallenge({
    id,
    instruction,
    title,
    test_archive,
    start_archive,
    pontuation,
  }: IJS_Challenge): Promise<IJS_Challenge | void> {
    try {
      const result = await this.prisma.jS_Challenge.create({
        data: {
          id: id as string,
          instruction: instruction as string,
          title: title as string,
          test_archive: test_archive as string,
          start_archive: start_archive as string,
          pontuation: pontuation as number,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async updateJSChallenge({
    id,
    instruction,
    title,
    test_archive,
    start_archive,
    pontuation,
  }: IJS_Challenge): Promise<IJS_Challenge | void> {
    try {
      const result = await this.prisma.jS_Challenge.update({
        where: {
          id,
        },
        data: {
          instruction,
          title,
          test_archive,
          start_archive,
          pontuation,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readJSChallenge({
    id,
  }: IJS_Challenge): Promise<IJS_Challenge | void> {
    try {
      const result = await this.prisma.jS_Challenge.findUnique({
        where: {
          id,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readAllJSChallenge(): Promise<IJS_Challenge[] | void> {
    try {
      const result = await this.prisma.jS_Challenge.findMany();

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readJSChallengesUncompletedByUser(
    user_id: string,
  ): Promise<IJS_Challenge[] | void> {
    try {
      const result = await this.prisma.jS_Challenge.findMany({
        where: {
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

  public async deleteJSChallenge({
    id,
  }: IJS_Challenge): Promise<IJS_Challenge | void> {
    try {
      const result = await this.prisma.jS_Challenge.delete({
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
