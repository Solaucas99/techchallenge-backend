import { IHTML_Solution } from '@entities/IHTML_Solution';
import { Prisma } from '@prisma/client';

export interface IHTML_SolutionRepository {
  readAllHTMLSolution(): Promise<IHTML_Solution[] | void>;

  readHTMLSolution({ id }: IHTML_Solution): Promise<IHTML_Solution | void>;

  readHTMLSolutionsByUser({
    user_id,
  }: IHTML_Solution): Promise<IHTML_Solution[] | void>;

  readHTMLSolutionsByChallengeAndUser({
    user_id,
    html_challenge_id,
  }: IHTML_Solution): Promise<IHTML_Solution[] | void>;

  readHTMLSolutionsByChallenge({
    html_challenge_id,
  }: IHTML_Solution): Promise<IHTML_Solution[] | void>;

  deleteHTMLSolutionsByChallenge({
    html_challenge_id,
  }: IHTML_Solution): Promise<Prisma.BatchPayload | void>;

  createHTMLSolution({
    user_id,
    html_challenge_id,
    solution_submitted,
  }: IHTML_Solution): Promise<IHTML_Solution | void>;

  // updateHTMLSolution({
  //   id,
  //   likes,
  // }: IHTML_Solution): Promise<IHTML_Solution | void>;
}
