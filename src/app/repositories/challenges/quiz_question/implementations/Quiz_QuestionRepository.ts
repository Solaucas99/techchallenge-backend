import { Prisma, PrismaClient } from '@prisma/client';

import { IQuiz_Question } from '@entities/IQuiz_Question';
import { IQuiz_QuestionRepository } from '../interfaces/IQuiz_QuestionRepository';

export class Quiz_QuestionRepository implements IQuiz_QuestionRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  public async createQuizQuestion({
    correct_answer,
    option_1,
    option_2,
    option_3,
    option_4,
    question_score,
    question_text,
    quiz_challenge_id,
  }: IQuiz_Question): Promise<IQuiz_Question | void> {
    try {
      const result = await this.prisma.quiz_Question.create({
        data: {
          correct_answer: correct_answer as number,
          option_1: option_1 as string,
          option_2: option_2 as string,
          option_3: option_3 as string,
          option_4: option_4 as string,
          question_score: question_score as number,
          question_text: question_text as string,
          quiz_challenge_id: quiz_challenge_id as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async updateQuizQuestion({
    id,
    correct_answer,
    option_1,
    option_2,
    option_3,
    option_4,
    question_score,
    question_text,
    quiz_challenge_id,
  }: IQuiz_Question): Promise<IQuiz_Question | void> {
    try {
      const result = await this.prisma.quiz_Question.update({
        where: {
          id,
        },
        data: {
          correct_answer: correct_answer as number,
          option_1: option_1 as string,
          option_2: option_2 as string,
          option_3: option_3 as string,
          option_4: option_4 as string,
          question_score: question_score as number,
          question_text: question_text as string,
          quiz_challenge_id: quiz_challenge_id as string,
        },
      });

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readQuizQuestion({
    id,
  }: IQuiz_Question): Promise<IQuiz_Question | void> {
    try {
      const result = await this.prisma.quiz_Question.findUnique({
        where: {
          id,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readQuizQuestionsByChallenge({
    quiz_challenge_id,
  }: IQuiz_Question): Promise<IQuiz_Question[] | void> {
    try {
      const result = await this.prisma.quiz_Question.findMany({
        where: {
          quiz_challenge_id,
        },
        select: {
          createdAt: true,
          id: true,
          option_1: true,
          option_2: true,
          option_3: true,
          option_4: true,
          question_text: true,
          question_score: true,
          Quiz_Challenge: true,
        },
        take: 5,
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async deleteQuizQuestionsByChallenge({
    quiz_challenge_id,
  }: IQuiz_Question): Promise<Prisma.BatchPayload | void> {
    try {
      const result = await this.prisma.quiz_Question.deleteMany({
        where: {
          quiz_challenge_id,
        },
      });

      return result ? result : undefined;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async readAllQuizQuestion(): Promise<IQuiz_Question[] | void> {
    try {
      const result = await this.prisma.quiz_Question.findMany();

      return result;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  public async deleteQuizQuestion({
    id,
  }: IQuiz_Question): Promise<IQuiz_Question | void> {
    try {
      const result = await this.prisma.quiz_Question.delete({
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
