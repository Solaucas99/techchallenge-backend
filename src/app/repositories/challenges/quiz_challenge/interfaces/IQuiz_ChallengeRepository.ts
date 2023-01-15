import { IQuiz_Challenge } from '@entities/IQuiz_Challenge';

export interface IQuiz_ChallengeRepository {
  readAllQuizChallenge(): Promise<IQuiz_Challenge[] | void>;

  readQuizChallengesUncompletedByUser(
    user_id: string,
  ): Promise<IQuiz_Challenge[] | void>;

  readQuizChallenge({ id }: IQuiz_Challenge): Promise<IQuiz_Challenge | void>;

  deleteQuizChallenge({ id }: IQuiz_Challenge): Promise<IQuiz_Challenge | void>;

  createQuizChallenge({
    instruction,
    title,
  }: IQuiz_Challenge): Promise<IQuiz_Challenge | void>;

  updateQuizChallenge({
    id,
    instruction,
    title,
  }: IQuiz_Challenge): Promise<IQuiz_Challenge | void>;
}
