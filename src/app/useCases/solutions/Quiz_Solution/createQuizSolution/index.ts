import { Quiz_QuestionRepository } from '@challengesRep/quiz_question/implementations/Quiz_QuestionRepository';
import { Quiz_SolutionRepository } from '@solutionsRep/quiz_solution/implementations/Quiz_SolutionRepository';
import { CreateQuizSolutionController } from './CreateQuizSolutionController';
import { CreateQuizSolutionUseCase } from './CreateQuizSolutionUseCase';

const repo1 = new Quiz_SolutionRepository();
const repo2 = new Quiz_QuestionRepository();
const useCase = new CreateQuizSolutionUseCase(repo1, repo2);
const createQuizSolutionController = new CreateQuizSolutionController(useCase);

export { createQuizSolutionController };
