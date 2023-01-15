import { Prisma, PrismaClient } from '@prisma/client';

import { IHTML_Solution_Like } from '@entities/IHTML_Solution_Like';
import { IHTML_Solution_LikeRepository } from '../interfaces/IHTML_Solution_LikeRepository';

export class HTML_Solution_LikeRepository
  implements IHTML_Solution_LikeRepository
{
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createHTMLSolutionLike({
    html_solution_id,
    user_id,
  }: IHTML_Solution_Like): Promise<IHTML_Solution_Like | void> {
    try {
      const result = await this.prisma.hTML_Solution_Like.create({
        data: {
          user_id: user_id as string,
          html_solution_id: html_solution_id as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readHTMLSolutionsLikeBySolution({
    html_solution_id,
  }: IHTML_Solution_Like): Promise<IHTML_Solution_Like[] | void> {
    try {
      const result = await this.prisma.hTML_Solution_Like.findMany({
        where: {
          html_solution_id,
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

  public async readHTMLSolutionsLikeByUserAndSolution({
    html_solution_id,
    user_id,
  }: IHTML_Solution_Like): Promise<IHTML_Solution_Like[] | void> {
    try {
      const result = await this.prisma.hTML_Solution_Like.findMany({
        where: {
          html_solution_id: html_solution_id as string,
          user_id: user_id as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async deleteHTMLSolutionsLikeByUserAndSolution({
    html_solution_id,
    user_id,
  }: IHTML_Solution_Like): Promise<Prisma.BatchPayload | void> {
    try {
      const result = await this.prisma.hTML_Solution_Like.deleteMany({
        where: {
          html_solution_id: html_solution_id as string,
          user_id: user_id as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async deleteHTMLSolutionsLikeBySolution({
    html_solution_id,
  }: IHTML_Solution_Like): Promise<Prisma.BatchPayload | void> {
    try {
      const result = await this.prisma.hTML_Solution_Like.deleteMany({
        where: {
          html_solution_id: html_solution_id as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
