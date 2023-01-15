import { ICode_Complete_Challenge } from '@entities/ICode_Complete_Challenge';

export interface ICode_Complete_ChallengeRepository {
  readAllCodeCompleteChallenge(): Promise<ICode_Complete_Challenge[] | void>;

  readCodeCompleteChallengesUncompletedByUser(
    user_id: string,
  ): Promise<ICode_Complete_Challenge[] | void>;

  readCodeCompleteChallenge({
    id,
  }: ICode_Complete_Challenge): Promise<ICode_Complete_Challenge | void>;

  deleteCodeCompleteChallenge({
    id,
  }: ICode_Complete_Challenge): Promise<ICode_Complete_Challenge | void>;

  createCodeCompleteChallenge({
    instruction,
    title,
    answer_1,
    answer_2,
    answer_3,
    challenge_archive,
  }: ICode_Complete_Challenge): Promise<ICode_Complete_Challenge | void>;

  updateCodeCompleteChallenge({
    id,
    instruction,
    title,
    answer_1,
    answer_2,
    answer_3,
    challenge_archive,
  }: ICode_Complete_Challenge): Promise<ICode_Complete_Challenge | void>;
}
