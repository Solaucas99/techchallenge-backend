import { Quiz_QuestionRepository } from '@challengesRep/quiz_question/implementations/Quiz_QuestionRepository';
import { DeleteQuizQuestionController } from './DeleteQuizQuestionController';
import { DeleteQuizQuestionUseCase } from './DeleteQuizQuestionUseCase';

const repo = new Quiz_QuestionRepository();
const useCase = new DeleteQuizQuestionUseCase(repo);
const deleteQuizQuestionController = new DeleteQuizQuestionController(useCase);

export { deleteQuizQuestionController };
