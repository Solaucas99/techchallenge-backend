import { JS_ChallengeRepository } from '@challengesRep/js_challenge/implementations/JS_ChallengeRepository';
import { ReadJSChallengeController } from './ReadJSChallengeController';
import { ReadJSChallengeUseCase } from './ReadJSChallengeUseCase';

const repo = new JS_ChallengeRepository();
const useCase = new ReadJSChallengeUseCase(repo);
const readJSChallengeController = new ReadJSChallengeController(useCase);

export { readJSChallengeController };
