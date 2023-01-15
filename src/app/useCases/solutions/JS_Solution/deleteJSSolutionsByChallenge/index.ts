import { JS_SolutionRepository } from '@solutionsRep/js_solution/implementations/JS_SolutionRepository';
import { DeleteJSSolutionsByChallengeController } from './DeleteJSSolutionsByChallengeController';
import { DeleteJSSolutionsByChallengeUseCase } from './DeleteJSSolutionsByChallengeUseCase';

const repo = new JS_SolutionRepository();
const useCase = new DeleteJSSolutionsByChallengeUseCase(repo);
const deleteJSSolutionsByChallengeController =
  new DeleteJSSolutionsByChallengeController(useCase);

export { deleteJSSolutionsByChallengeController };
