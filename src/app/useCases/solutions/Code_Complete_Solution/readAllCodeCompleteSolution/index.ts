import { Code_Complete_SolutionRepository } from '@solutionsRep/code_complete_solution/implementations/Code_Complete_SolutionRepository';
import { ReadAllCodeCompleteSolutionController } from './ReadAllCodeCompleteSolutionController';
import { ReadAllCodeCompleteSolutionUseCase } from './ReadAllCodeCompleteSolutionUseCase';

const repo = new Code_Complete_SolutionRepository();
const useCase = new ReadAllCodeCompleteSolutionUseCase(repo);
const readAllCodeCompleteSolutionController =
  new ReadAllCodeCompleteSolutionController(useCase);

export { readAllCodeCompleteSolutionController };
