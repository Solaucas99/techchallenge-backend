import { IQuiz_Solution } from '@entities/IQuiz_Solution';
import { Prisma } from '@prisma/client';

export interface IQuiz_SolutionRepository {
  readAllQuizSolution(): Promise<IQuiz_Solution[] | void>;

  readQuizSolutionsByUser({
    user_id,
  }: IQuiz_Solution): Promise<IQuiz_Solution[] | void>;

  readQuizSolutionsByChallengeAndUser({
    user_id,
    quiz_challenge_id,
  }: IQuiz_Solution): Promise<IQuiz_Solution[] | void>;

  deleteQuizSolutionsByChallenge({
    quiz_challenge_id,
  }: IQuiz_Solution): Promise<Prisma.BatchPayload | void>;

  readQuizSolution({ id }: IQuiz_Solution): Promise<IQuiz_Solution | void>;

  createQuizSolution({
    answer_1,
    answer_2,
    answer_3,
    answer_4,
    answer_5,
    correct_answers_pontuation,
    user_id,
    quiz_challenge_id,
  }: IQuiz_Solution): Promise<IQuiz_Solution | void>;
}
