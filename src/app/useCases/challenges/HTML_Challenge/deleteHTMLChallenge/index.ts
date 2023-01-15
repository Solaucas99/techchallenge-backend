import { HTML_ChallengeRepository } from '@challengesRep/html_challenge/implementations/HTML_ChallengeRepository';
import { DeleteHTMLChallengeController } from './DeleteHTMLChallengeController';
import { DeleteHTMLChallengeUseCase } from './DeleteHTMLChallengeUseCase';

const repo = new HTML_ChallengeRepository();
const useCase = new DeleteHTMLChallengeUseCase(repo);
const deleteHTMLChallengeController = new DeleteHTMLChallengeController(
  useCase,
);

export { deleteHTMLChallengeController };
