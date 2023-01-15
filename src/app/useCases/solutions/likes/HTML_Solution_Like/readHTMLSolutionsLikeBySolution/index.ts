import { HTML_Solution_LikeRepository } from '@solutionsLikesRep/html_solution_like/implementations/HTML_Solution_LikeRepository';
import { ReadHTMLSolutionsLikeBySolutionController } from './ReadHTMLSolutionsLikeBySolutionController';
import { ReadHTMLSolutionsLikeBySolutionUseCase } from './ReadHTMLSolutionsLikeBySolutionUseCase';

const repo = new HTML_Solution_LikeRepository();
const useCase = new ReadHTMLSolutionsLikeBySolutionUseCase(repo);
const readHTMLSolutionsLikeBySolutionController =
  new ReadHTMLSolutionsLikeBySolutionController(useCase);

export { readHTMLSolutionsLikeBySolutionController };
