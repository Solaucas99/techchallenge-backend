import { Code_Complete_SolutionRepository } from '@solutionsRep/code_complete_solution/implementations/Code_Complete_SolutionRepository';
import { ReadCodeCompleteSolutionsByChallengeAndUserController } from './ReadCodeCompleteSolutionsByChallengeAndUserController';
import { ReadCodeCompleteSolutionsByChallengeAndUserUseCase } from './ReadCodeCompleteSolutionsByChallengeAndUserUseCase';

const repo = new Code_Complete_SolutionRepository();
const useCase = new ReadCodeCompleteSolutionsByChallengeAndUserUseCase(repo);
const readCodeCompleteSolutionsByChallengeAndUserController =
  new ReadCodeCompleteSolutionsByChallengeAndUserController(useCase);

export { readCodeCompleteSolutionsByChallengeAndUserController };
