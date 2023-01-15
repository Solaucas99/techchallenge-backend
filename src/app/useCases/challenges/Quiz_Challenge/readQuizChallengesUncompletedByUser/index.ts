import { Quiz_ChallengeRepository } from '@challengesRep/quiz_challenge/implementations/Quiz_ChallengeRepository';
import { ReadQuizChallengesUncompletedByUserController } from './ReadQuizChallengesUncompletedByUserController';
import { ReadQuizChallengesUncompletedByUserUseCase } from './ReadQuizChallengesUncompletedByUserUseCase';

const repo = new Quiz_ChallengeRepository();
const useCase = new ReadQuizChallengesUncompletedByUserUseCase(repo);
const readQuizChallengesUncompletedByUserController =
  new ReadQuizChallengesUncompletedByUserController(useCase);

export { readQuizChallengesUncompletedByUserController };
