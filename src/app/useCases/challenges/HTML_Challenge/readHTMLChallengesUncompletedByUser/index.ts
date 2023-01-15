import { HTML_ChallengeRepository } from '@challengesRep/html_challenge/implementations/HTML_ChallengeRepository';
import { ReadHTMLChallengesUncompletedByUserController } from './ReadHTMLChallengesUncompletedByUserController';
import { ReadHTMLChallengesUncompletedByUserUseCase } from './ReadHTMLChallengesUncompletedByUserUseCase';

const repo = new HTML_ChallengeRepository();
const useCase = new ReadHTMLChallengesUncompletedByUserUseCase(repo);
const readHTMLChallengesUncompletedByUserController =
  new ReadHTMLChallengesUncompletedByUserController(useCase);

export { readHTMLChallengesUncompletedByUserController };
