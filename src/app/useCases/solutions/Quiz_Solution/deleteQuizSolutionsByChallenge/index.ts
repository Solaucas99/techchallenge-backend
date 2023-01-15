import { Quiz_SolutionRepository } from '@solutionsRep/quiz_solution/implementations/Quiz_SolutionRepository';
import { DeleteQuizSolutionsByChallengeController } from './DeleteQuizSolutionsByChallengeController';
import { DeleteQuizSolutionsByChallengeUseCase } from './DeleteQuizSolutionsByChallengeUseCase';

const repo = new Quiz_SolutionRepository();
const useCase = new DeleteQuizSolutionsByChallengeUseCase(repo);
const deleteQuizSolutionsByChallengeController =
  new DeleteQuizSolutionsByChallengeController(useCase);

export { deleteQuizSolutionsByChallengeController };
