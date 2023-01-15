import { Quiz_SolutionRepository } from '@solutionsRep/quiz_solution/implementations/Quiz_SolutionRepository';
import { ReadQuizSolutionController } from './ReadQuizSolutionController';
import { ReadQuizSolutionUseCase } from './ReadQuizSolutionUseCase';

const repo = new Quiz_SolutionRepository();
const useCase = new ReadQuizSolutionUseCase(repo);
const readQuizSolutionController = new ReadQuizSolutionController(useCase);

export { readQuizSolutionController };
