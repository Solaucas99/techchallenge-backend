import { IJS_Solution } from '@entities/IJS_Solution';
import { Prisma } from '@prisma/client';

export interface IJS_SolutionRepository {
  readAllJSSolution(): Promise<IJS_Solution[] | void>;

  readJSSolution({ id }: IJS_Solution): Promise<IJS_Solution | void>;

  readJSSolutionsByUser({
    user_id,
  }: IJS_Solution): Promise<IJS_Solution[] | void>;

  readJSSolutionsByChallengeAndUser({
    user_id,
    js_challenge_id,
  }: IJS_Solution): Promise<IJS_Solution[] | void>;

  readJSSolutionsByChallenge({
    js_challenge_id,
  }: IJS_Solution): Promise<IJS_Solution[] | void>;

  deleteJSSolutionsByChallenge({
    js_challenge_id,
  }: IJS_Solution): Promise<Prisma.BatchPayload | void>;

  createJSSolution({
    user_id,
    solution_submitted,
    js_challenge_id,
  }: IJS_Solution): Promise<IJS_Solution | void>;

  // updateJSSolution({ id, likes }: IJS_Solution): Promise<IJS_Solution | void>;
}
