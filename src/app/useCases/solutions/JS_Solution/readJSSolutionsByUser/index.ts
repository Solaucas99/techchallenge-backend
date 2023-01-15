import { JS_SolutionRepository } from '@solutionsRep/js_solution/implementations/JS_SolutionRepository';
import { ReadJSSolutionsByUserController } from './ReadJSSolutionsByUserController';
import { ReadJSSolutionsByUserUseCase } from './ReadJSSolutionsByUserUseCase';

const repo = new JS_SolutionRepository();
const useCase = new ReadJSSolutionsByUserUseCase(repo);
const readJSSolutionsByUserController = new ReadJSSolutionsByUserController(
  useCase,
);

export { readJSSolutionsByUserController };
