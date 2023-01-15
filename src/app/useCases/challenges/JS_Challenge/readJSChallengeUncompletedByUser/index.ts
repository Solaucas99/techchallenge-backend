import { JS_ChallengeRepository } from '@challengesRep/js_challenge/implementations/JS_ChallengeRepository';
import { ReadJSChallengesUncompletedByUserController } from './ReadJSChallengesUncompletedByUserController';
import { ReadJSChallengesUncompletedByUserUseCase } from './ReadJSChallengesUncompletedByUserUseCase';

const repo = new JS_ChallengeRepository();
const useCase = new ReadJSChallengesUncompletedByUserUseCase(repo);
const readJSChallengesUncompletedByUserController =
  new ReadJSChallengesUncompletedByUserController(useCase);

export { readJSChallengesUncompletedByUserController };
