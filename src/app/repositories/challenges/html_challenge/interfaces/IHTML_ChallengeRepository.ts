import { IHTML_Challenge } from '@entities/IHTML_Challenge';

export interface IHTML_ChallengeRepository {
  readAllHTMLChallenge(): Promise<IHTML_Challenge[] | void>;

  readHTMLChallengesUncompletedByUser(
    user_id: string,
  ): Promise<IHTML_Challenge[] | void>;

  readHTMLChallenge({ id }: IHTML_Challenge): Promise<IHTML_Challenge | void>;

  deleteHTMLChallenge({ id }: IHTML_Challenge): Promise<IHTML_Challenge | void>;

  createHTMLChallenge({
    instruction,
    test_archive,
    html_archive,
    start_archive,
    title,
    pontuation,
  }: IHTML_Challenge): Promise<IHTML_Challenge | void>;

  updateHTMLChallenge({
    id,
    instruction,
    test_archive,
    html_archive,
    start_archive,
    title,
    pontuation,
  }: IHTML_Challenge): Promise<IHTML_Challenge | void>;
}
