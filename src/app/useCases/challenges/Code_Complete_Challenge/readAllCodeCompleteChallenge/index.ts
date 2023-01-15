import { Code_Complete_ChallengeRepository } from '@challengesRep/code_complete_challenge/implementations/Code_Complete_ChallengeRepository';
import { ReadAllCodeCompleteChallengeController } from './ReadAllCodeCompleteChallengeController';
import { ReadAllCodeCompleteChallengeUseCase } from './ReadAllCodeCompleteUseCase';

const repo = new Code_Complete_ChallengeRepository();
const useCase = new ReadAllCodeCompleteChallengeUseCase(repo);
const readAllCodeCompleteChallengeController =
  new ReadAllCodeCompleteChallengeController(useCase);

export { readAllCodeCompleteChallengeController };
