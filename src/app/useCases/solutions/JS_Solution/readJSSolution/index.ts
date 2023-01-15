import { JS_SolutionRepository } from '@solutionsRep/js_solution/implementations/JS_SolutionRepository';
import { ReadJSSolutionController } from './ReadJSSolutionController';
import { ReadJSSolutionUseCase } from './ReadJSSolutionUseCase';

const repo = new JS_SolutionRepository();
const useCase = new ReadJSSolutionUseCase(repo);
const readJSSolutionController = new ReadJSSolutionController(useCase);

export { readJSSolutionController };
