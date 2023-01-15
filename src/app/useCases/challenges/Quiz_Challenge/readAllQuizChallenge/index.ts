import { Quiz_ChallengeRepository } from '@challengesRep/quiz_challenge/implementations/Quiz_ChallengeRepository';
import { ReadAllQuizChallengeController } from './ReadAllQuizChallengeController';
import { ReadAllQuizChallengeUseCase } from './ReadAllQuizChallengeUseCase';

const repo = new Quiz_ChallengeRepository();
const useCase = new ReadAllQuizChallengeUseCase(repo);
const readAllQuizChallengeController = new ReadAllQuizChallengeController(
  useCase,
);

export { readAllQuizChallengeController };
