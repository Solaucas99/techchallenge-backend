import { Quiz_QuestionRepository } from '@challengesRep/quiz_question/implementations/Quiz_QuestionRepository';
import { ReadAllQuizQuestionController } from './ReadAllQuizQuestionController';
import { ReadAllQuizQuestionUseCase } from './ReadAllQuizQuestionUseCase';

const repo = new Quiz_QuestionRepository();
const useCase = new ReadAllQuizQuestionUseCase(repo);
const readAllQuizQuestionController = new ReadAllQuizQuestionController(
  useCase,
);

export { readAllQuizQuestionController };
