import { HTML_ChallengeRepository } from '@challengesRep/html_challenge/implementations/HTML_ChallengeRepository';
import { ReadAllHTMLChallengeController } from './ReadAllHTMLChallengeController';
import { ReadAllHTMLChallengeUseCase } from './ReadAllHTMLChallengeUseCase';

const repo = new HTML_ChallengeRepository();
const useCase = new ReadAllHTMLChallengeUseCase(repo);
const readAllHTMLChallengeController = new ReadAllHTMLChallengeController(
  useCase,
);

export { readAllHTMLChallengeController };
