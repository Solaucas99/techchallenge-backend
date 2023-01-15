import { IJS_Challenge } from '@entities/IJS_Challenge';

export interface IJS_ChallengeRepository {
  readAllJSChallenge(): Promise<IJS_Challenge[] | void>;

  readJSChallengesUncompletedByUser(
    user_id: string,
  ): Promise<IJS_Challenge[] | void>;

  readJSChallenge({ id }: IJS_Challenge): Promise<IJS_Challenge | void>;

  deleteJSChallenge({ id }: IJS_Challenge): Promise<IJS_Challenge | void>;

  createJSChallenge({
    id,
    instruction,
    test_archive,
    start_archive,
    title,
    pontuation,
  }: IJS_Challenge): Promise<IJS_Challenge | void>;

  updateJSChallenge({
    id,
    instruction,
    test_archive,
    start_archive,
    title,
    pontuation,
  }: IJS_Challenge): Promise<IJS_Challenge | void>;
}
