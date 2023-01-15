import { IQuiz_Question } from '@entities/IQuiz_Question';
import { Prisma } from '@prisma/client';

export interface IQuiz_QuestionRepository {
  readAllQuizQuestion(): Promise<IQuiz_Question[] | void>;

  readQuizQuestion({ id }: IQuiz_Question): Promise<IQuiz_Question | void>;

  readQuizQuestionsByChallenge({
    quiz_challenge_id,
  }: IQuiz_Question): Promise<IQuiz_Question[] | void>;

  deleteQuizQuestionsByChallenge({
    quiz_challenge_id,
  }: IQuiz_Question): Promise<Prisma.BatchPayload | void>;

  deleteQuizQuestion({ id }: IQuiz_Question): Promise<IQuiz_Question | void>;

  createQuizQuestion({
    correct_answer,
    option_1,
    option_2,
    option_3,
    option_4,
    question_score,
    question_text,
    quiz_challenge_id,
  }: IQuiz_Question): Promise<IQuiz_Question | void>;

  updateQuizQuestion({
    id,
    correct_answer,
    option_1,
    option_2,
    option_3,
    option_4,
    question_score,
    question_text,
    quiz_challenge_id,
  }: IQuiz_Question): Promise<IQuiz_Question | void>;
}
