import { JS_ChallengeRepository } from '@challengesRep/js_challenge/implementations/JS_ChallengeRepository';
import { ReadAllJSChallengeController } from './ReadAllJSChallengeController';
import { ReadAllJSChallengeUseCase } from './ReadAllJSChallengeUseCase';

const repo = new JS_ChallengeRepository();
const useCase = new ReadAllJSChallengeUseCase(repo);
const readAllJSChallengeController = new ReadAllJSChallengeController(useCase);

export { readAllJSChallengeController };
