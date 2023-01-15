import { HTML_ChallengeRepository } from '@challengesRep/html_challenge/implementations/HTML_ChallengeRepository';
import { ReadHTMLChallengeController } from './ReadHTMLChallengeController';
import { ReadHTMLChallengeUseCase } from './ReadHTMLChallengeUseCase';

const repo = new HTML_ChallengeRepository();
const useCase = new ReadHTMLChallengeUseCase(repo);
const readHTMLChallengeController = new ReadHTMLChallengeController(useCase);

export { readHTMLChallengeController };
