import { Code_Complete_ChallengeRepository } from '@challengesRep/code_complete_challenge/implementations/Code_Complete_ChallengeRepository';
import { ReadCodeCompleteChallengesUncompletedByUserController } from './ReadCodeCompleteChallengesUncompletedByUserController';
import { ReadCodeCompleteChallengesUncompletedByUserUseCase } from './ReadCodeCompleteChallengesUncompletedByUserUseCase';

const repo = new Code_Complete_ChallengeRepository();
const useCase = new ReadCodeCompleteChallengesUncompletedByUserUseCase(repo);
const readCodeCompleteChallengesUncompletedByUserController =
  new ReadCodeCompleteChallengesUncompletedByUserController(useCase);

export { readCodeCompleteChallengesUncompletedByUserController };
