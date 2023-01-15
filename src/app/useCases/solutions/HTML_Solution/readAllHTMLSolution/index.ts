import { HTML_SolutionRepository } from '@solutionsRep/html_solution/implementations/HTML_SolutionRepository';
import { ReadAllHTMLSolutionController } from './ReadAllHTMLSolutionController';
import { ReadAllHTMLSolutionUseCase } from './ReadAllHTMLSolutionUseCase';

const repo = new HTML_SolutionRepository();
const useCase = new ReadAllHTMLSolutionUseCase(repo);
const readAllHTMLSolutionController = new ReadAllHTMLSolutionController(
  useCase,
);

export { readAllHTMLSolutionController };
