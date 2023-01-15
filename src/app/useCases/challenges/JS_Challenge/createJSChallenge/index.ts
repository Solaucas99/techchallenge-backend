import { JS_ChallengeRepository } from '@challengesRep/js_challenge/implementations/JS_ChallengeRepository';
import { CreateJSChallengeController } from './CreateJSChallengeController';
import { CreateJSChallengeUseCase } from './CreateJSChallengeUseCase';

const repo = new JS_ChallengeRepository();
const useCase = new CreateJSChallengeUseCase(repo);
const createJSChallengeController = new CreateJSChallengeController(useCase);

export { createJSChallengeController };
