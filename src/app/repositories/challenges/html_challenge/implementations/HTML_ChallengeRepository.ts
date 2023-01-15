import { PrismaClient } from '@prisma/client';

import { IHTML_Challenge } from '@entities/IHTML_Challenge';
import { IHTML_ChallengeRepository } from '../interfaces/IHTML_ChallengeRepository';

export class HTML_ChallengeRepository implements IHTML_ChallengeRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  public async createHTMLChallenge({
    id,
    instruction,
    title,
    test_archive,
    html_archive,
    start_archive,
    pontuation,
  }: IHTML_Challenge): Promise<IHTML_Challenge | void> {
    try {
      const result = await this.prisma.hTML_Challenge.create({
        data: {
          id: id as string,
          instruction: instruction as string,
          title: title as string,
          test_archive: test_archive as string,
          pontuation: pontuation as number,
          html_archive: html_archive as string,
          start_archive: start_archive as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async updateHTMLChallenge({
    id,
    instruction,
    title,
    test_archive,
    start_archive,
    html_archive,
    pontuation,
  }: IHTML_Challenge): Promise<IHTML_Challenge | void> {
    try {
      const result = await this.prisma.hTML_Challenge.update({
        where: {
          id,
        },
        data: {
          instruction,
          title,
          test_archive,
          start_archive,
          html_archive,
          pontuation,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readHTMLChallenge({
    id,
  }: IHTML_Challenge): Promise<IHTML_Challenge | void> {
    try {
      const result = await this.prisma.hTML_Challenge.findUnique({
        where: {
          id,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readAllHTMLChallenge(): Promise<IHTML_Challenge[] | void> {
    try {
      const result = await this.prisma.hTML_Challenge.findMany();

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readHTMLChallengesUncompletedByUser(
    user_id: string,
  ): Promise<IHTML_Challenge[] | void> {
    try {
      const result = await this.prisma.hTML_Challenge.findMany({
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

  public async deleteHTMLChallenge({
    id,
  }: IHTML_Challenge): Promise<IHTML_Challenge | void> {
    try {
      const result = await this.prisma.hTML_Challenge.delete({
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
