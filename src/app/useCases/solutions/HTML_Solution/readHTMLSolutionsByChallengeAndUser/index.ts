import { HTML_SolutionRepository } from '@solutionsRep/html_solution/implementations/HTML_SolutionRepository';
import { ReadHTMLSolutionsByChallengeAndUserController } from './ReadHTMLSolutionsByChallengeAndUserController';
import { ReadHTMLSolutionsByChallengeAndUserUseCase } from './ReadHTMLSolutionsByChallengeAndUserUseCase';

const repo = new HTML_SolutionRepository();
const useCase = new ReadHTMLSolutionsByChallengeAndUserUseCase(repo);
const readHTMLSolutionsByChallengeAndUserController =
  new ReadHTMLSolutionsByChallengeAndUserController(useCase);

export { readHTMLSolutionsByChallengeAndUserController };
