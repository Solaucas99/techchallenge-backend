import { Quiz_QuestionRepository } from '@challengesRep/quiz_question/implementations/Quiz_QuestionRepository';
import { DeleteQuizQuestionsByChallengeController } from './DeleteQuizQuestionsByChallengeController';
import { DeleteQuizQuestionsByChallengeUseCase } from './DeleteQuizQuestionsByChallengeUseCase';

const repo = new Quiz_QuestionRepository();
const useCase = new DeleteQuizQuestionsByChallengeUseCase(repo);
const deleteQuizQuestionsByChallengeController =
  new DeleteQuizQuestionsByChallengeController(useCase);

export { deleteQuizQuestionsByChallengeController };
