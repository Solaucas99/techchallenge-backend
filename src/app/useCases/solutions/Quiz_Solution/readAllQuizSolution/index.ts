import { Quiz_SolutionRepository } from '@solutionsRep/quiz_solution/implementations/Quiz_SolutionRepository';
import { ReadAllQuizSolutionController } from './ReadAllQuizSolutionController';
import { ReadAllQuizSolutionUseCase } from './ReadAllQuizSolutionUseCase';

const repo = new Quiz_SolutionRepository();
const useCase = new ReadAllQuizSolutionUseCase(repo);
const readAllQuizSolutionController = new ReadAllQuizSolutionController(
  useCase,
);

export { readAllQuizSolutionController };
