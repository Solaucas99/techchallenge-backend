import { JS_SolutionRepository } from '@solutionsRep/js_solution/implementations/JS_SolutionRepository';
import { CreateJSSolutionController } from './CreateJSSolutionController';
import { CreateJSSolutionUseCase } from './CreateJSSolutionUseCase';

const repo = new JS_SolutionRepository();
const useCase = new CreateJSSolutionUseCase(repo);
const createJSSolutionController = new CreateJSSolutionController(useCase);

export { createJSSolutionController };
