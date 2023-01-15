import { Quiz_QuestionRepository } from '@challengesRep/quiz_question/implementations/Quiz_QuestionRepository';
import { CreateQuizQuestionController } from './CreateQuizQuestionController';
import { CreateQuizQuestionUseCase } from './CreateQuizQuestionUseCase';

const repo = new Quiz_QuestionRepository();
const useCase = new CreateQuizQuestionUseCase(repo);
const createQuizQuestionController = new CreateQuizQuestionController(useCase);

export { createQuizQuestionController };
