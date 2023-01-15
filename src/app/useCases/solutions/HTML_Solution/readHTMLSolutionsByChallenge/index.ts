import { HTML_SolutionRepository } from '@solutionsRep/html_solution/implementations/HTML_SolutionRepository';
import { ReadHTMLSolutionsByChallengeController } from './ReadHTMLSolutionsByChallengeController';
import { ReadHTMLSolutionsByChallengeUseCase } from './ReadHTMLSolutionsByChallengeUseCase';

const repo = new HTML_SolutionRepository();
const useCase = new ReadHTMLSolutionsByChallengeUseCase(repo);
const readHTMLSolutionsByChallengeController =
  new ReadHTMLSolutionsByChallengeController(useCase);

export { readHTMLSolutionsByChallengeController };
