import { HTML_Solution_LikeRepository } from '@solutionsLikesRep/html_solution_like/implementations/HTML_Solution_LikeRepository';
import { DeleteHTMLSolutionsLikeByUserAndSolutionController } from './DeleteHTMLSolutionsLikeByUserAndSolutionController';
import { DeleteHTMLSolutionsLikeByUserAndSolutionUseCase } from './DeleteHTMLSolutionsLikeByUserAndSolutionUseCase';

const repo = new HTML_Solution_LikeRepository();
const useCase = new DeleteHTMLSolutionsLikeByUserAndSolutionUseCase(repo);
const deleteHTMLSolutionsLikeByUserAndSolutionController =
  new DeleteHTMLSolutionsLikeByUserAndSolutionController(useCase);

export { deleteHTMLSolutionsLikeByUserAndSolutionController };
