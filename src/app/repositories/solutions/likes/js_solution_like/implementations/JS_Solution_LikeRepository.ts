import { Prisma, PrismaClient } from '@prisma/client';

import { IJS_Solution_Like } from '@entities/IJS_Solution_Like';
import { IJS_Solution_LikeRepository } from '../interfaces/IJS_Solution_LikeRepository';

export class JS_Solution_LikeRepository implements IJS_Solution_LikeRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createJSSolutionLike({
    js_solution_id,
    user_id,
  }: IJS_Solution_Like): Promise<IJS_Solution_Like | void> {
    try {
      const result = await this.prisma.jS_Solution_Like.create({
        data: {
          user_id: user_id as string,
          js_solution_id: js_solution_id as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readJSSolutionsLikeBySolution({
    js_solution_id,
  }: IJS_Solution_Like): Promise<IJS_Solution_Like[] | void> {
    try {
      const result = await this.prisma.jS_Solution_Like.findMany({
        where: {
          js_solution_id,
        },
        include: {
          User: true,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readJSSolutionsLikeByUserAndSolution({
    js_solution_id,
    user_id,
  }: IJS_Solution_Like): Promise<IJS_Solution_Like[] | void> {
    try {
      const result = await this.prisma.jS_Solution_Like.findMany({
        where: {
          js_solution_id: js_solution_id as string,
          user_id: user_id as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async deleteJSSolutionsLikeByUserAndSolution({
    js_solution_id,
    user_id,
  }: IJS_Solution_Like): Promise<Prisma.BatchPayload | void> {
    try {
      const result = await this.prisma.jS_Solution_Like.deleteMany({
        where: {
          js_solution_id: js_solution_id as string,
          user_id: user_id as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async deleteJSSolutionsLikeBySolution({
    js_solution_id,
  }: IJS_Solution_Like): Promise<Prisma.BatchPayload | void> {
    try {
      const result = await this.prisma.jS_Solution_Like.deleteMany({
        where: {
          js_solution_id: js_solution_id as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
