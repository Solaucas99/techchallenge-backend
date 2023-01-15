import { Quiz_SolutionRepository } from '@solutionsRep/quiz_solution/implementations/Quiz_SolutionRepository';
import { ReadQuizSolutionsByUserController } from './ReadQuizSolutionsByUserController';
import { ReadQuizSolutionsByUserUseCase } from './ReadQuizSolutionsByUserUseCase';

const repo = new Quiz_SolutionRepository();
const useCase = new ReadQuizSolutionsByUserUseCase(repo);
const readQuizSolutionsByUserController = new ReadQuizSolutionsByUserController(
  useCase,
);

export { readQuizSolutionsByUserController };
