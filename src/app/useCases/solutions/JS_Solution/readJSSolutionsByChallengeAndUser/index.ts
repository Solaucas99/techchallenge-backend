import { JS_SolutionRepository } from '@solutionsRep/js_solution/implementations/JS_SolutionRepository';
import { ReadJSSolutionsByChallengeAndUserController } from './ReadJSSolutionsByChallengeAndUserController';
import { ReadJSSolutionsByChallengeAndUserUseCase } from './ReadJSSolutionsByChallengeAndUserUseCase';

const repo = new JS_SolutionRepository();
const useCase = new ReadJSSolutionsByChallengeAndUserUseCase(repo);
const readJSSolutionsByChallengeAndUserController =
  new ReadJSSolutionsByChallengeAndUserController(useCase);

export { readJSSolutionsByChallengeAndUserController };
