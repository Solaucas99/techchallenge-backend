import { JS_SolutionRepository } from '@solutionsRep/js_solution/implementations/JS_SolutionRepository';
import { ReadAllJSSolutionController } from './ReadAllJSSolutionController';
import { ReadAllJSSolutionUseCase } from './ReadAllJSSolutionUseCase';

const repo = new JS_SolutionRepository();
const useCase = new ReadAllJSSolutionUseCase(repo);
const readAllJSSolutionController = new ReadAllJSSolutionController(useCase);

export { readAllJSSolutionController };
