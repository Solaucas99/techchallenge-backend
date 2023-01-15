import { JS_SolutionRepository } from '@solutionsRep/js_solution/implementations/JS_SolutionRepository';
import { ReadJSSolutionsByChallengeController } from './ReadJSSolutionsByChallengeController';
import { ReadJSSolutionsByChallengeUseCase } from './ReadJSSolutionsByChallengeUseCase';

const repo = new JS_SolutionRepository();
const useCase = new ReadJSSolutionsByChallengeUseCase(repo);
const readJSSolutionsByChallengeController =
  new ReadJSSolutionsByChallengeController(useCase);

export { readJSSolutionsByChallengeController };
