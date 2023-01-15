import { Quiz_SolutionRepository } from '@solutionsRep/quiz_solution/implementations/Quiz_SolutionRepository';
import { ReadQuizSolutionsByChallengeAndUserController } from './ReadQuizSolutionsByChallengeAndUserController';
import { ReadQuizSolutionsByChallengeAndUserUseCase } from './ReadQuizSolutionsByChallengeAndUserUseCase';

const repo = new Quiz_SolutionRepository();
const useCase = new ReadQuizSolutionsByChallengeAndUserUseCase(repo);
const readQuizSolutionsByChallengeAndUserController =
  new ReadQuizSolutionsByChallengeAndUserController(useCase);

export { readQuizSolutionsByChallengeAndUserController };
