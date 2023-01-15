import { Code_Complete_ChallengeRepository } from '@challengesRep/code_complete_challenge/implementations/Code_Complete_ChallengeRepository';
import { DeleteCodeCompleteChallengeController } from './DeleteCodeCompleteChallengeController';
import { DeleteCodeCompleteChallengeUseCase } from './DeleteCodeCompleteChallengeUseCase';

const repo = new Code_Complete_ChallengeRepository();
const useCase = new DeleteCodeCompleteChallengeUseCase(repo);
const deleteCodeCompleteChallengeController =
  new DeleteCodeCompleteChallengeController(useCase);

export { deleteCodeCompleteChallengeController };
