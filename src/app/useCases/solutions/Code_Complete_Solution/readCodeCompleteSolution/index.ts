import { Code_Complete_SolutionRepository } from '@solutionsRep/code_complete_solution/implementations/Code_Complete_SolutionRepository';
import { ReadCodeCompleteSolutionController } from './ReadCodeCompleteSolutionController';
import { ReadCodeCompleteSolutionUseCase } from './ReadCodeCompleteSolutionUseCase';

const repo = new Code_Complete_SolutionRepository();
const useCase = new ReadCodeCompleteSolutionUseCase(repo);
const readCodeCompleteSolutionController =
  new ReadCodeCompleteSolutionController(useCase);

export { readCodeCompleteSolutionController };
