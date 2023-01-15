import { Prisma, PrismaClient } from '@prisma/client';

import { IHTML_Solution } from '@entities/IHTML_Solution';
import { IHTML_SolutionRepository } from '../interfaces/IHTML_SolutionRepository';

export class HTML_SolutionRepository implements IHTML_SolutionRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createHTMLSolution({
    html_challenge_id,
    user_id,
    solution_submitted,
  }: IHTML_Solution): Promise<IHTML_Solution | void> {
    try {
      const result = await this.prisma.hTML_Solution.create({
        data: {
          user_id: user_id as string,
          html_challenge_id: html_challenge_id as string,
          solution_submitted: solution_submitted as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readHTMLSolution({
    id,
  }: IHTML_Solution): Promise<IHTML_Solution | void> {
    try {
      const result = await this.prisma.hTML_Solution.findUnique({
        where: {
          id,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readHTMLSolutionsByUser({
    user_id,
  }: IHTML_Solution): Promise<IHTML_Solution[] | void> {
    try {
      const result = await this.prisma.hTML_Solution.findMany({
        where: {
          user_id,
        },
        include: {
          User: true,
          Likes: true,
          HTML_Challenge: true,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readHTMLSolutionsByChallengeAndUser({
    html_challenge_id,
    user_id,
  }: IHTML_Solution): Promise<IHTML_Solution[] | void> {
    try {
      const result = await this.prisma.hTML_Solution.findMany({
        where: {
          html_challenge_id,
          user_id,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readHTMLSolutionsByChallenge({
    html_challenge_id,
  }: IHTML_Solution): Promise<IHTML_Solution[] | void> {
    try {
      const result = await this.prisma.hTML_Solution.findMany({
        where: {
          html_challenge_id,
        },
        include: {
          User: true,
          Likes: true,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async deleteHTMLSolutionsByChallenge({
    html_challenge_id,
  }: IHTML_Solution): Promise<Prisma.BatchPayload | void> {
    try {
      const result = await this.prisma.hTML_Solution.deleteMany({
        where: {
          html_challenge_id,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readAllHTMLSolution(): Promise<IHTML_Solution[] | void> {
    try {
      const result = await this.prisma.hTML_Solution.findMany();

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  // public async updateHTMLSolution({
  //   id,
  //   likes,
  // }: IHTML_Solution): Promise<IHTML_Solution | void> {
  //   try {
  //     const result = await this.prisma.hTML_Solution.update({
  //       where: {
  //         id,
  //       },
  //       data: {
  //         likes,
  //       },
  //     });

  //     return result;
  //   } catch (err: any) {
  //     throw new Error(err);
  //   }
  // }
}
