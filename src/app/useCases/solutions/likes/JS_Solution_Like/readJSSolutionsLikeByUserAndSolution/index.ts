import { JS_Solution_LikeRepository } from '@solutionsLikesRep/js_solution_like/implementations/JS_Solution_LikeRepository';
import { ReadJSSolutionsLikeByUserAndSolutionController } from './ReadJSSolutionsLikeByUserAndSolutionController';
import { ReadJSSolutionsLikeByUserAndSolutionUseCase } from './ReadJSSolutionsLikeByUserAndSolutionUseCase';

const repo = new JS_Solution_LikeRepository();
const useCase = new ReadJSSolutionsLikeByUserAndSolutionUseCase(repo);
const readJSSolutionsLikeByUserAndSolutionController =
  new ReadJSSolutionsLikeByUserAndSolutionController(useCase);

export { readJSSolutionsLikeByUserAndSolutionController };
