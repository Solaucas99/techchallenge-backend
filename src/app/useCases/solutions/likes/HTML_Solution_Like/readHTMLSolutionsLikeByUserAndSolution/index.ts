import { HTML_Solution_LikeRepository } from '@solutionsLikesRep/html_solution_like/implementations/HTML_Solution_LikeRepository';
import { ReadHTMLSolutionsLikeByUserAndSolutionController } from './ReadHTMLSolutionsLikeByUserAndSolutionController';
import { ReadHTMLSolutionsLikeByUserAndSolutionUseCase } from './ReadHTMLSolutionsLikeByUserAndSolutionUseCase';

const repo = new HTML_Solution_LikeRepository();
const useCase = new ReadHTMLSolutionsLikeByUserAndSolutionUseCase(repo);
const readHTMLSolutionsLikeByUserAndSolutionController =
  new ReadHTMLSolutionsLikeByUserAndSolutionController(useCase);

export { readHTMLSolutionsLikeByUserAndSolutionController };
