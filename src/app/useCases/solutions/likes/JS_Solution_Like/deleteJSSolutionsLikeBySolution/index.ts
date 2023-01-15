import { JS_Solution_LikeRepository } from '@solutionsLikesRep/js_solution_like/implementations/JS_Solution_LikeRepository';
import { DeleteJSSolutionsLikeBySolutionController } from './DeleteJSSolutionsLikeBySolutionController';
import { DeleteJSSolutionsLikeBySolutionUseCase } from './DeleteJSSolutionsLikeBySolutionUseCase';

const repo = new JS_Solution_LikeRepository();
const useCase = new DeleteJSSolutionsLikeBySolutionUseCase(repo);
const deleteJSSolutionsLikeBySolutionController =
  new DeleteJSSolutionsLikeBySolutionController(useCase);

export { deleteJSSolutionsLikeBySolutionController };
