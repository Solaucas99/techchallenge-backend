import { Code_Complete_ChallengeRepository } from '@challengesRep/code_complete_challenge/implementations/Code_Complete_ChallengeRepository';
import { CreateCodeCompleteChallengeController } from './CreateCodeCompleteChallengeController';
import { CreateCodeCompleteChallengeUseCase } from './CreateCodeCompleteChallengeUseCase';

const repo = new Code_Complete_ChallengeRepository();
const useCase = new CreateCodeCompleteChallengeUseCase(repo);
const createCodeCompleteChallengeController =
  new CreateCodeCompleteChallengeController(useCase);

export { createCodeCompleteChallengeController };
