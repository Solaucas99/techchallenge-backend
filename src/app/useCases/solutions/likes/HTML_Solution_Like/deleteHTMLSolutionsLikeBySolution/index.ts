import { HTML_Solution_LikeRepository } from '@solutionsLikesRep/html_solution_like/implementations/HTML_Solution_LikeRepository';
import { DeleteHTMLSolutionsLikeBySolutionController } from './DeleteHTMLSolutionsLikeBySolutionController';
import { DeleteHTMLSolutionsLikeBySolutionUseCase } from './DeleteHTMLSolutionsLikeBySolutionUseCase';

const repo = new HTML_Solution_LikeRepository();
const useCase = new DeleteHTMLSolutionsLikeBySolutionUseCase(repo);
const deleteHTMLSolutionsLikeBySolutionController =
  new DeleteHTMLSolutionsLikeBySolutionController(useCase);

export { deleteHTMLSolutionsLikeBySolutionController };
