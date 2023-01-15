import { Prisma, PrismaClient } from '@prisma/client';

import { IQuiz_Solution } from '@entities/IQuiz_Solution';
import { IQuiz_SolutionRepository } from '../interfaces/IQuiz_SolutionRepository';

export class Quiz_SolutionRepository implements IQuiz_SolutionRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  public async createQuizSolution({
    answer_1,
    answer_2,
    answer_3,
    answer_4,
    answer_5,
    correct_answers_pontuation,
    user_id,
    quiz_challenge_id,
  }: IQuiz_Solution): Promise<IQuiz_Solution | void> {
    try {
      const result = await this.prisma.quiz_Solution.create({
        data: {
          answer_1: answer_1 as number,
          answer_2: answer_2 as number,
          answer_3: answer_3 as number,
          answer_4: answer_4 as number,
          answer_5: answer_5 as number,
          correct_answers_pontuation: correct_answers_pontuation as number,
          user_id: user_id as string,
          quiz_challenge_id: quiz_challenge_id as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readQuizSolution({
    id,
  }: IQuiz_Solution): Promise<IQuiz_Solution | void> {
    try {
      const result = await this.prisma.quiz_Solution.findUnique({
        where: {
          id,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readQuizSolutionsByUser({
    user_id,
  }: IQuiz_Solution): Promise<IQuiz_Solution[] | void> {
    try {
      const result = await this.prisma.quiz_Solution.findMany({
        where: {
          user_id,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readQuizSolutionsByChallengeAndUser({
    user_id,
    quiz_challenge_id,
  }: IQuiz_Solution): Promise<IQuiz_Solution[] | void> {
    try {
      const result = await this.prisma.quiz_Solution.findMany({
        where: {
          user_id,
          quiz_challenge_id,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async deleteQuizSolutionsByChallenge({
    quiz_challenge_id,
  }: IQuiz_Solution): Promise<Prisma.BatchPayload | void> {
    try {
      const result = await this.prisma.quiz_Solution.deleteMany({
        where: {
          quiz_challenge_id,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readAllQuizSolution(): Promise<IQuiz_Solution[] | void> {
    try {
      const result = await this.prisma.quiz_Solution.findMany();

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
