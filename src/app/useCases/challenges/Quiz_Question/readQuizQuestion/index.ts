import { Quiz_QuestionRepository } from '@challengesRep/quiz_question/implementations/Quiz_QuestionRepository';
import { ReadQuizQuestionController } from './ReadQuizQuestionController';
import { ReadQuizQuestionUseCase } from './ReadQuizQuestionUseCase';

const repo = new Quiz_QuestionRepository();
const useCase = new ReadQuizQuestionUseCase(repo);
const readQuizQuestionController = new ReadQuizQuestionController(useCase);

export { readQuizQuestionController };
