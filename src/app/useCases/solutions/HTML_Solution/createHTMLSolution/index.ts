import { HTML_SolutionRepository } from '@solutionsRep/html_solution/implementations/HTML_SolutionRepository';
import { CreateHTMLSolutionController } from './CreateHTMLSolutionController';
import { CreateHTMLSolutionUseCase } from './CreateHTMLSolutionUseCase';

const repo = new HTML_SolutionRepository();
const useCase = new CreateHTMLSolutionUseCase(repo);
const createHTMLSolutionController = new CreateHTMLSolutionController(useCase);

export { createHTMLSolutionController };
