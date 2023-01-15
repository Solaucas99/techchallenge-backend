import { Code_Complete_ChallengeRepository } from '@challengesRep/code_complete_challenge/implementations/Code_Complete_ChallengeRepository';
import { ReadCodeCompleteChallengeController } from './ReadCodeCompleteChallengeController';
import { ReadCodeCompleteChallengeUseCase } from './ReadCodeCompleteChallengeUseCase';

const repo = new Code_Complete_ChallengeRepository();
const useCase = new ReadCodeCompleteChallengeUseCase(repo);
const readCodeCompleteChallengeController =
  new ReadCodeCompleteChallengeController(useCase);

export { readCodeCompleteChallengeController };
