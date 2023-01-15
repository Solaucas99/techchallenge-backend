import { Quiz_ChallengeRepository } from '@challengesRep/quiz_challenge/implementations/Quiz_ChallengeRepository';
import { ReadQuizChallengeController } from './ReadQuizChallengeController';
import { ReadQuizChallengeUseCase } from './ReadQuizChallengeUseCase';

const repo = new Quiz_ChallengeRepository();
const useCase = new ReadQuizChallengeUseCase(repo);
const readQuizChallengeController = new ReadQuizChallengeController(useCase);

export { readQuizChallengeController };
