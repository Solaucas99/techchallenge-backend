import { JS_ChallengeRepository } from '@challengesRep/js_challenge/implementations/JS_ChallengeRepository';
import { HTML_ChallengeRepository } from '@challengesRep/html_challenge/implementations/HTML_ChallengeRepository';
import { MochaTestProvider } from '@providers/tests/implementations/MochaTestProvider';
import { TestController } from './TestController';
import { TestUseCase } from './TestUseCase';

const repo_1 = new JS_ChallengeRepository();
const repo_2 = new HTML_ChallengeRepository();
const provider = new MochaTestProvider();
const useCase = new TestUseCase(provider, repo_1, repo_2);
const testController = new TestController(useCase);

export { testController };
