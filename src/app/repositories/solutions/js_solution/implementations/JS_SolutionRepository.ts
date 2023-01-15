import { Prisma, PrismaClient } from '@prisma/client';

import { IJS_Solution } from '@entities/IJS_Solution';
import { IJS_SolutionRepository } from '../interfaces/IJS_SolutionRepository';

export class JS_SolutionRepository implements IJS_SolutionRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createJSSolution({
    js_challenge_id,
    user_id,
    solution_submitted,
  }: IJS_Solution): Promise<IJS_Solution | void> {
    try {
      const result = await this.prisma.jS_Solution.create({
        data: {
          user_id: user_id as string,
          js_challenge_id: js_challenge_id as string,
          solution_submitted: solution_submitted as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  // public async updateJSSolution({
  //   id,
  //   likes,
  // }: IJS_Solution): Promise<IJS_Solution | void> {
  //   try {
  //     const result = await this.prisma.jS_Solution.update({
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

  public async readJSSolution({
    id,
  }: IJS_Solution): Promise<IJS_Solution | void> {
    try {
      const result = await this.prisma.jS_Solution.findUnique({
        where: {
          id,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readJSSolutionsByUser({
    user_id,
  }: IJS_Solution): Promise<IJS_Solution[] | void> {
    try {
      const result = await this.prisma.jS_Solution.findMany({
        where: {
          user_id,
        },
        include: {
          User: true,
          Likes: true,
          JS_Challenge: true,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readJSSolutionsByChallenge({
    js_challenge_id,
  }: IJS_Solution): Promise<IJS_Solution[] | void> {
    try {
      const result = await this.prisma.jS_Solution.findMany({
        where: {
          js_challenge_id,
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

  public async deleteJSSolutionsByChallenge({
    js_challenge_id,
  }: IJS_Solution): Promise<Prisma.BatchPayload | void> {
    try {
      const result = await this.prisma.jS_Solution.deleteMany({
        where: {
          js_challenge_id,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readJSSolutionsByChallengeAndUser({
    js_challenge_id,
    user_id,
  }: IJS_Solution): Promise<IJS_Solution[] | void> {
    try {
      const result = await this.prisma.jS_Solution.findMany({
        where: {
          js_challenge_id,
          user_id,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readAllJSSolution(): Promise<IJS_Solution[] | void> {
    try {
      const result = await this.prisma.jS_Solution.findMany();

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
