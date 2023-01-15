import { Code_Complete_SolutionRepository } from '@solutionsRep/code_complete_solution/implementations/Code_Complete_SolutionRepository';
import { DeleteCodeCompleteSolutionsByChallengeController } from './DeleteCodeCompleteSolutionsByChallengeController';
import { DeleteCodeCompleteSolutionsByChallengeUseCase } from './DeleteCodeCompleteSolutionsByChallengeUseCase';

const repo = new Code_Complete_SolutionRepository();
const useCase = new DeleteCodeCompleteSolutionsByChallengeUseCase(repo);
const deleteCodeCompleteSolutionsByChallengeController =
  new DeleteCodeCompleteSolutionsByChallengeController(useCase);

export { deleteCodeCompleteSolutionsByChallengeController };
