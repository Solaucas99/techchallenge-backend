import { Quiz_QuestionRepository } from '@challengesRep/quiz_question/implementations/Quiz_QuestionRepository';
import { ReadQuizQuestionsByChallengeController } from './ReadQuizQuestionsByChallengeController';
import { ReadQuizQuestionsByChallengeUseCase } from './ReadQuizQuestionsByChallengeUseCase';

const repo = new Quiz_QuestionRepository();
const useCase = new ReadQuizQuestionsByChallengeUseCase(repo);
const readQuizQuestionsByChallengeController =
  new ReadQuizQuestionsByChallengeController(useCase);

export { readQuizQuestionsByChallengeController };
