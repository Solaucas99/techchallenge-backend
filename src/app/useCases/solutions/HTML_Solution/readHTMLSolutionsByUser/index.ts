import { HTML_SolutionRepository } from '@solutionsRep/html_solution/implementations/HTML_SolutionRepository';
import { ReadHTMLSolutionsByUserController } from './ReadHTMLSolutionsByUserController';
import { ReadHTMLSolutionsByUserUseCase } from './ReadHTMLSolutionsByUserUseCase';

const repo = new HTML_SolutionRepository();
const useCase = new ReadHTMLSolutionsByUserUseCase(repo);
const readHTMLSolutionsByUserController = new ReadHTMLSolutionsByUserController(
  useCase,
);

export { readHTMLSolutionsByUserController };
