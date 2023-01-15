import { Code_Complete_SolutionRepository } from '@solutionsRep/code_complete_solution/implementations/Code_Complete_SolutionRepository';
import { ReadCodeCompleteSolutionsByUserController } from './ReadCodeCompleteSolutionsByUserController';
import { ReadCodeCompleteSolutionsByUserUseCase } from './ReadCodeCompleteSolutionsByUserUseCase';

const repo = new Code_Complete_SolutionRepository();
const useCase = new ReadCodeCompleteSolutionsByUserUseCase(repo);
const readCodeCompleteSolutionsByUserController =
  new ReadCodeCompleteSolutionsByUserController(useCase);

export { readCodeCompleteSolutionsByUserController };
