import { ICode_Complete_Solution } from '@entities/ICode_Complete_Solution';
import { Prisma } from '@prisma/client';

export interface ICode_Complete_SolutionRepository {
  readAllCode_CompleteSolution(): Promise<ICode_Complete_Solution[] | void>;

  readCode_CompleteSolutionsByUser({
    user_id,
  }: ICode_Complete_Solution): Promise<ICode_Complete_Solution[] | void>;

  readCode_CompleteSolutionsByChallengeAndUser({
    user_id,
    code_complete_challenge_id,
  }: ICode_Complete_Solution): Promise<ICode_Complete_Solution[] | void>;

  deleteCode_CompleteSolutionsByChallenge({
    code_complete_challenge_id,
  }: ICode_Complete_Solution): Promise<Prisma.BatchPayload | void>;

  readCode_CompleteSolution({
    id,
  }: ICode_Complete_Solution): Promise<ICode_Complete_Solution | void>;

  createCode_CompleteSolution({
    user_id,
    answer_1,
    answer_2,
    answer_3,
    code_complete_challenge_id,
  }: ICode_Complete_Solution): Promise<ICode_Complete_Solution | void>;
}
