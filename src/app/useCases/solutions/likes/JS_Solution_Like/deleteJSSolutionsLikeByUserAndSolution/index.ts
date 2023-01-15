import { JS_Solution_LikeRepository } from '@solutionsLikesRep/js_solution_like/implementations/JS_Solution_LikeRepository';
import { DeleteJSSolutionsLikeByUserAndSolutionController } from './DeleteJSSolutionsLikeByUserAndSolutionController';
import { DeleteJSSolutionsLikeByUserAndSolutionUseCase } from './DeleteJSSolutionsLikeByUserAndSolutionUseCase';

const repo = new JS_Solution_LikeRepository();
const useCase = new DeleteJSSolutionsLikeByUserAndSolutionUseCase(repo);
const deleteJSSolutionsLikeByUserAndSolutionController =
  new DeleteJSSolutionsLikeByUserAndSolutionController(useCase);

export { deleteJSSolutionsLikeByUserAndSolutionController };
