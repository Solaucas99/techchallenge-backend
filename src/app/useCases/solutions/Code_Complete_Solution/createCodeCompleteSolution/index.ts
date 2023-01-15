import { Code_Complete_ChallengeRepository } from '@challengesRep/code_complete_challenge/implementations/Code_Complete_ChallengeRepository';
import { Code_Complete_SolutionRepository } from '@solutionsRep/code_complete_solution/implementations/Code_Complete_SolutionRepository';
import { CreateCodeCompleteSolutionController } from './CreateCodeCompleteSolutionController';
import { CreateCodeCompleteSolutionUseCase } from './CreateCodeCompleteSolutionUseCase';

const repo1 = new Code_Complete_SolutionRepository();
const repo2 = new Code_Complete_ChallengeRepository();
const useCase = new CreateCodeCompleteSolutionUseCase(repo1, repo2);
const createCodeCompleteSolutionController =
  new CreateCodeCompleteSolutionController(useCase);

export { createCodeCompleteSolutionController };
