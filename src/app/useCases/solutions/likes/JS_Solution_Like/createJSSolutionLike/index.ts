import { JS_Solution_LikeRepository } from '@solutionsLikesRep/js_solution_like/implementations/JS_Solution_LikeRepository';
import { CreateJSSolutionLikeController } from './CreateJSSolutionLikeController';
import { CreateJSSolutionLikeUseCase } from './CreateJSSolutionLikeUseCase';

const repo = new JS_Solution_LikeRepository();
const useCase = new CreateJSSolutionLikeUseCase(repo);
const createJSSolutionLikeController = new CreateJSSolutionLikeController(
  useCase,
);

export { createJSSolutionLikeController };
