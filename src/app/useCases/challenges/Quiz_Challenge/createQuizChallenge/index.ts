import { Quiz_ChallengeRepository } from '@challengesRep/quiz_challenge/implementations/Quiz_ChallengeRepository';
import { CreateQuizChallengeController } from './CreateQuizChallengeController';
import { CreateQuizChallengeUseCase } from './CreateQuizChallengeUseCase';

const repo = new Quiz_ChallengeRepository();
const useCase = new CreateQuizChallengeUseCase(repo);
const createQuizChallengeController = new CreateQuizChallengeController(
  useCase,
);

export { createQuizChallengeController };
