import { Quiz_ChallengeRepository } from '@challengesRep/quiz_challenge/implementations/Quiz_ChallengeRepository';
import { DeleteQuizChallengeController } from './DeleteQuizChallengeController';
import { DeleteQuizChallengeUseCase } from './DeleteQuizChallengeUseCase';

const repo = new Quiz_ChallengeRepository();
const useCase = new DeleteQuizChallengeUseCase(repo);
const deleteQuizChallengeController = new DeleteQuizChallengeController(
  useCase,
);

export { deleteQuizChallengeController };
