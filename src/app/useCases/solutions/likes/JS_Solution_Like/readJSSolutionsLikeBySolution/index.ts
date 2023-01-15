import { JS_Solution_LikeRepository } from '@solutionsLikesRep/js_solution_like/implementations/JS_Solution_LikeRepository';
import { ReadJSSolutionsLikeBySolutionController } from './ReadJSSolutionsLikeBySolutionController';
import { ReadJSSolutionsLikeBySolutionUseCase } from './ReadJSSolutionsLikeBySolutionUseCase';

const repo = new JS_Solution_LikeRepository();
const useCase = new ReadJSSolutionsLikeBySolutionUseCase(repo);
const readJSSolutionsLikeBySolutionController =
  new ReadJSSolutionsLikeBySolutionController(useCase);

export { readJSSolutionsLikeBySolutionController };
