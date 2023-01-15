import { HTML_Solution_LikeRepository } from '@solutionsLikesRep/html_solution_like/implementations/HTML_Solution_LikeRepository';
import { CreateHTMLSolutionLikeController } from './CreateHTMLSolutionLikeController';
import { CreateHTMLSolutionLikeUseCase } from './CreateHTMLSolutionLikeUseCase';

const repo = new HTML_Solution_LikeRepository();
const useCase = new CreateHTMLSolutionLikeUseCase(repo);
const createHTMLSolutionLikeController = new CreateHTMLSolutionLikeController(
  useCase,
);

export { createHTMLSolutionLikeController };
