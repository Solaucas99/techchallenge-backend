import { HTML_SolutionRepository } from '@solutionsRep/html_solution/implementations/HTML_SolutionRepository';
import { DeleteHTMLSolutionsByChallengeController } from './DeleteHTMLSolutionsByChallengeController';
import { DeleteHTMLSolutionsByChallengeUseCase } from './DeleteHTMLSolutionsByChallengeUseCase';

const repo = new HTML_SolutionRepository();
const useCase = new DeleteHTMLSolutionsByChallengeUseCase(repo);
const deleteHTMLSolutionsByChallengeController =
  new DeleteHTMLSolutionsByChallengeController(useCase);

export { deleteHTMLSolutionsByChallengeController };
