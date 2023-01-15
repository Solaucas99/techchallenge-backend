import { JS_ChallengeRepository } from '@challengesRep/js_challenge/implementations/JS_ChallengeRepository';
import { DeleteJSChallengeController } from './DeleteJSChallengeController';
import { DeleteJSChallengeUseCase } from './DeleteJSChallengeUseCase';

const repo = new JS_ChallengeRepository();
const useCase = new DeleteJSChallengeUseCase(repo);
const deleteJSChallengeController = new DeleteJSChallengeController(useCase);

export { deleteJSChallengeController };
