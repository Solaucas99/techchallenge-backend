import { HTML_SolutionRepository } from '@solutionsRep/html_solution/implementations/HTML_SolutionRepository';
import { ReadHTMLSolutionController } from './ReadHTMLSolutionController';
import { ReadHTMLSolutionUseCase } from './ReadHTMLSolutionUseCase';

const repo = new HTML_SolutionRepository();
const useCase = new ReadHTMLSolutionUseCase(repo);
const readHTMLSolutionController = new ReadHTMLSolutionController(useCase);

export { readHTMLSolutionController };
