import { HTML_ChallengeRepository } from '@challengesRep/html_challenge/implementations/HTML_ChallengeRepository';
import { CreateHTMLChallengeController } from './CreateHTMLChallengeController';
import { CreateHTMLChallengeUseCase } from './CreateHTMLChallengeUseCase';

const repo = new HTML_ChallengeRepository();
const useCase = new CreateHTMLChallengeUseCase(repo);
const createHTMLChallengeController = new CreateHTMLChallengeController(
  useCase,
);

export { createHTMLChallengeController };
