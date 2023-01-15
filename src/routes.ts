import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';

// - JS Challenges - //
import { createJSChallengeController } from '@challengesUseCases/JS_Challenge/createJSChallenge';
import { readJSChallengeController } from '@challengesUseCases/JS_Challenge/readJSChallenge';
import { deleteJSChallengeController } from '@challengesUseCases/JS_Challenge/deleteJSChallenge';
import { readAllJSChallengeController } from '@challengesUseCases/JS_Challenge/readAllJSChallenge';
import { readJSChallengesUncompletedByUserController } from '@challengesUseCases/JS_Challenge/readJSChallengeUncompletedByUser';

// - JS Solution - //
import { createJSSolutionController } from '@solutionsUseCases/JS_Solution/createJSSolution';
import { readJSSolutionController } from '@solutionsUseCases/JS_Solution/readJSSolution';
import { readAllJSSolutionController } from '@solutionsUseCases/JS_Solution/readAllJSSolution';
import { readJSSolutionsByUserController } from '@solutionsUseCases/JS_Solution/readJSSolutionsByUser';
import { readJSSolutionsByChallengeController } from '@solutionsUseCases/JS_Solution/readJSSolutionsByChallenge';
import { readJSSolutionsByChallengeAndUserController } from '@solutionsUseCases/JS_Solution/readJSSolutionsByChallengeAndUser';
import { deleteJSSolutionsByChallengeController } from '@solutionsUseCases/JS_Solution/deleteJSSolutionsByChallenge';

// - JS Solution Likes - //
import { createJSSolutionLikeController } from '@solutionsUseCases/likes/JS_Solution_Like/createJSSolutionLike';
import { readJSSolutionsLikeBySolutionController } from '@solutionsUseCases/likes/JS_Solution_Like/readJSSolutionsLikeBySolution';
import { deleteJSSolutionsLikeByUserAndSolutionController } from '@solutionsUseCases/likes/JS_Solution_Like/deleteJSSolutionsLikeByUserAndSolution';
import { deleteJSSolutionsLikeBySolutionController } from '@solutionsUseCases/likes/JS_Solution_Like/deleteJSSolutionsLikeBySolution';
import { readJSSolutionsLikeByUserAndSolutionController } from '@solutionsUseCases/likes/JS_Solution_Like/readJSSolutionsLikeByUserAndSolution';

// - HTML Challenges - //
import { createHTMLChallengeController } from '@challengesUseCases/HTML_Challenge/createHTMLChallenge';
import { readHTMLChallengeController } from '@challengesUseCases/HTML_Challenge/readHTMLChallenge';
import { deleteHTMLChallengeController } from '@challengesUseCases/HTML_Challenge/deleteHTMLChallenge';
import { readAllHTMLChallengeController } from '@challengesUseCases/HTML_Challenge/readAllHTMLChallenge';
import { readHTMLChallengesUncompletedByUserController } from '@challengesUseCases/HTML_Challenge/readHTMLChallengesUncompletedByUser';

//- HTML Solution - //
import { createHTMLSolutionController } from '@solutionsUseCases/HTML_Solution/createHTMLSolution';
import { readHTMLSolutionController } from '@solutionsUseCases/HTML_Solution/readHTMLSolution';
import { readAllHTMLSolutionController } from '@solutionsUseCases/HTML_Solution/readAllHTMLSolution';
import { readHTMLSolutionsByUserController } from '@solutionsUseCases/HTML_Solution/readHTMLSolutionsByUser';
import { readHTMLSolutionsByChallengeController } from '@solutionsUseCases/HTML_Solution/readHTMLSolutionsByChallenge';
import { readHTMLSolutionsByChallengeAndUserController } from '@solutionsUseCases/HTML_Solution/readHTMLSolutionsByChallengeAndUser';
import { deleteHTMLSolutionsByChallengeController } from '@solutionsUseCases/HTML_Solution/deleteHTMLSolutionsByChallenge';

// - HTML Solution Likes - //
import { createHTMLSolutionLikeController } from '@solutionsUseCases/likes/HTML_Solution_Like/createHTMLSolutionLike';
import { readHTMLSolutionsLikeBySolutionController } from '@solutionsUseCases/likes/HTML_Solution_Like/readHTMLSolutionsLikeBySolution';
import { deleteHTMLSolutionsLikeBySolutionController } from '@solutionsUseCases/likes/HTML_Solution_Like/deleteHTMLSolutionsLikeBySolution';
import { deleteHTMLSolutionsLikeByUserAndSolutionController } from '@solutionsUseCases/likes/HTML_Solution_Like/deleteHTMLSolutionsLikeByUserAndSolution';
import { readHTMLSolutionsLikeByUserAndSolutionController } from '@solutionsUseCases/likes/HTML_Solution_Like/readHTMLSolutionsLikeByUserAndSolution';

// - Quiz Challenges - //
import { createQuizChallengeController } from '@challengesUseCases/Quiz_Challenge/createQuizChallenge';
import { readQuizChallengeController } from '@challengesUseCases/Quiz_Challenge/readQuizChallenge';
import { deleteQuizChallengeController } from '@challengesUseCases/Quiz_Challenge/deleteQuizChallenge';
import { readAllQuizChallengeController } from '@challengesUseCases/Quiz_Challenge/readAllQuizChallenge';
import { readQuizChallengesUncompletedByUserController } from '@challengesUseCases/Quiz_Challenge/readQuizChallengesUncompletedByUser';

// - Quiz Questions - //
import { createQuizQuestionController } from '@challengesUseCases/Quiz_Question/createQuizQuestion';
import { readQuizQuestionController } from '@challengesUseCases/Quiz_Question/readQuizQuestion';
import { deleteQuizQuestionController } from '@challengesUseCases/Quiz_Question/deleteQuizQuestion';
import { readAllQuizQuestionController } from '@challengesUseCases/Quiz_Question/readAllQuizQuestion';
import { readQuizQuestionsByChallengeController } from '@challengesUseCases/Quiz_Question/readQuizQuestionsByChallenge';
import { deleteQuizQuestionsByChallengeController } from '@challengesUseCases/Quiz_Question/deleteQuizQuestionsByChallenge';

// - Quiz Solutions - //

import { createQuizSolutionController } from '@solutionsUseCases/Quiz_Solution/createQuizSolution';
import { readQuizSolutionController } from '@solutionsUseCases/Quiz_Solution/readQuizSolution';
import { readAllQuizSolutionController } from '@solutionsUseCases/Quiz_Solution/readAllQuizSolution';
import { readQuizSolutionsByUserController } from '@solutionsUseCases/Quiz_Solution/readQuizSolutionsByUser';
import { readQuizSolutionsByChallengeAndUserController } from '@solutionsUseCases/Quiz_Solution/readQuizSolutionsByChallengeAndUser';

// - Code Complete Challenge - //
import { createCodeCompleteChallengeController } from '@challengesUseCases/Code_Complete_Challenge/createCodeCompleteChallenge';
import { readCodeCompleteChallengeController } from '@challengesUseCases/Code_Complete_Challenge/readCodeCompleteChallenge';
import { deleteCodeCompleteChallengeController } from '@challengesUseCases/Code_Complete_Challenge/deleteCodeCompleteChallenge';
import { readAllCodeCompleteChallengeController } from '@challengesUseCases/Code_Complete_Challenge/readAllCodeCompleteChallenge';
import { readCodeCompleteChallengesUncompletedByUserController } from '@challengesUseCases/Code_Complete_Challenge/readCodeCompleteChallengesUncompletedByUser';

// - Code Complete Solutions - //
import { createCodeCompleteSolutionController } from '@solutionsUseCases/Code_Complete_Solution/createCodeCompleteSolution';
import { readCodeCompleteSolutionController } from '@solutionsUseCases/Code_Complete_Solution/readCodeCompleteSolution';
import { readAllCodeCompleteSolutionController } from '@solutionsUseCases/Code_Complete_Solution/readAllCodeCompleteSolution';
import { readCodeCompleteSolutionsByUserController } from '@solutionsUseCases/Code_Complete_Solution/readCodeCompleteSolutionsByUser';
import { deleteCodeCompleteSolutionsByChallengeController } from '@solutionsUseCases/Code_Complete_Solution/deleteCodeCompleteSolutionsByChallenge';
import { readCodeCompleteSolutionsByChallengeAndUserController } from '@solutionsUseCases/Code_Complete_Solution/readCodeCompleteSolutionsByChallengeAndUser';

// - Users - //
import { userLoginController } from '@usersUseCases/userLogin';
import { userSignUpController } from '@usersUseCases/userSignUp';

// - Ranking - //
import { rankingController } from './app/useCases/rankings/ranking';
import { requireLogin } from '@middlewares/requireLogin';
import { IRanking } from '@interfaces/IRanking';
import { requireAdmin } from '@middlewares/requireAdmin';

const routes = Router();
dotenv.config();

routes.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is ok!' });
});

// ---- Rankings Routes ---- //

routes.get('/ranking', requireLogin<IRanking>, rankingController.ranking);

// ---- User Routes ---- //

routes.post('/user/login', userLoginController.userLogin);
routes.post('/user/sign-up', userSignUpController.userSignUp);

// ---- JS Challenge Routes ---- //
routes.post(
  '/challenges/js/create',
  requireLogin,
  requireAdmin,
  createJSChallengeController.createJSChallenge,
);
routes.get(
  '/challenges/js/:id',
  requireLogin,
  readJSChallengeController.readJSChallenge,
);
routes.delete(
  '/challenges/js/delete/:id',
  requireLogin,
  requireAdmin,
  deleteJSChallengeController.deleteJSChallenge,
);
routes.get(
  '/challenges/js',
  requireLogin,
  readAllJSChallengeController.readAllJSChallenge,
);
routes.get(
  '/challenges/js/uncompleted/:user_id',
  requireLogin,
  readJSChallengesUncompletedByUserController.readJSChallengesUncompletedByUser,
);

// ---- HTML Challenge Routes ---- //
routes.post(
  '/challenges/html/create',
  requireLogin,
  requireAdmin,
  createHTMLChallengeController.createHTMLChallenge,
);
routes.get(
  '/challenges/html/:id',
  requireLogin,
  readHTMLChallengeController.readHTMLChallenge,
);

routes.delete(
  '/challenges/html/delete/:id',
  requireLogin,
  requireAdmin,
  deleteHTMLChallengeController.deleteHTMLChallenge,
);
routes.get(
  '/challenges/html',
  requireLogin,
  readAllHTMLChallengeController.readAllHTMLChallenge,
);
routes.get(
  '/challenges/html/uncompleted/:user_id',
  requireLogin,
  readHTMLChallengesUncompletedByUserController.readHTMLChallengesUncompletedByUser,
);

// ---- Quiz Challenge Routes ---- //
routes.post(
  '/challenges/quiz/create',
  requireLogin,
  requireAdmin,
  createQuizChallengeController.createQuizChallenge,
);
routes.get(
  '/challenges/quiz/:id',
  requireLogin,
  readQuizChallengeController.readQuizChallenge,
);

routes.delete(
  '/challenges/quiz/delete/:id',
  requireLogin,
  requireAdmin,
  deleteQuizChallengeController.deleteQuizChallenge,
);
routes.get(
  '/challenges/quiz',
  requireLogin,
  readAllQuizChallengeController.readAllQuizChallenge,
);
routes.get(
  '/challenges/quiz/uncompleted/:user_id',
  requireLogin,
  readQuizChallengesUncompletedByUserController.readQuizChallengesUncompletedByUser,
);

// ---- Quiz Questions Routes ---- //
routes.post(
  '/challenges/quiz/question/create',
  requireLogin,
  requireAdmin,
  createQuizQuestionController.createQuizQuestion,
);
routes.get(
  '/challenges/quiz/question/:id',
  requireLogin,
  readQuizQuestionController.readQuizQuestion,
);
routes.delete(
  '/challenges/quiz/question/delete/:id',
  requireLogin,
  requireAdmin,
  deleteQuizQuestionController.deleteQuizQuestion,
);
routes.get(
  '/challenges/quiz/question',
  requireLogin,
  readAllQuizQuestionController.readAllQuizQuestion,
);
routes.get(
  '/challenges/quiz/questions/:quiz_challenge_id',
  requireLogin,
  readQuizQuestionsByChallengeController.readQuizQuestionsByChallenge,
);
routes.delete(
  '/challenges/quiz/questions/:quiz_challenge_id',
  requireLogin,
  requireAdmin,
  deleteQuizQuestionsByChallengeController.deleteQuizQuestionsByChallenge,
);

// ---- Code-Complete Challenge Routes ---- //
routes.post(
  '/challenges/code-complete/create',
  requireLogin,
  requireAdmin,
  createCodeCompleteChallengeController.createCodeCompleteChallenge,
);
routes.get(
  '/challenges/code-complete/:id',
  requireLogin,
  readCodeCompleteChallengeController.readCodeCompleteChallenge,
);
routes.delete(
  '/challenges/code-complete/delete/:id',
  requireLogin,
  requireAdmin,
  deleteCodeCompleteChallengeController.deleteCodeCompleteChallenge,
);
routes.get(
  '/challenges/code-complete',
  requireLogin,
  readAllCodeCompleteChallengeController.readAllCodeCompleteChallenge,
);
routes.get(
  '/challenges/code-complete/uncompleted/:user_id',
  requireLogin,
  readCodeCompleteChallengesUncompletedByUserController.readCodeCompleteChallengesUncompletedByUser,
);

// ---- Code-Complete Solution Routes ---- //
routes.post(
  '/solutions/code-complete/create',
  requireLogin,
  createCodeCompleteSolutionController.createCodeCompleteSolution,
);
routes.get(
  '/solutions/code-complete/:id',
  requireLogin,
  readCodeCompleteSolutionController.readCodeCompleteSolution,
);
routes.get(
  '/solutions/code-complete',
  requireLogin,
  readAllCodeCompleteSolutionController.readAllCodeCompleteSolution,
);
routes.get(
  '/solutions/code-complete/user/:user_id',
  requireLogin,
  readCodeCompleteSolutionsByUserController.readCodeCompleteSolutionsByUser,
);
routes.get(
  '/solutions/code-complete/challenge/:code_complete_challenge_id/:user_id',
  requireLogin,
  readCodeCompleteSolutionsByChallengeAndUserController.readCodeCompleteSolutionsByChallengeAndUser,
);
routes.delete(
  '/solutions/code-complete/challenge/:code_complete_challenge_id',
  requireLogin,
  requireAdmin,
  deleteCodeCompleteSolutionsByChallengeController.deleteCodeCompleteSolutionsByChallenge,
);

// ---- Quiz Solution Routes ---- //
routes.post(
  '/solutions/quiz/create',
  requireLogin,
  createQuizSolutionController.createQuizSolution,
);
routes.get(
  '/solutions/quiz/:id',
  requireLogin,
  readQuizSolutionController.readQuizSolution,
);
routes.get(
  '/solutions/quiz',
  requireLogin,
  readAllQuizSolutionController.readAllQuizSolution,
);
routes.get(
  '/solutions/quiz/user/:user_id',
  requireLogin,
  readQuizSolutionsByUserController.readQuizSolutionsByUser,
);
routes.get(
  '/solutions/quiz/challenge/:quiz_challenge_id/:user_id',
  requireLogin,
  readQuizSolutionsByChallengeAndUserController.readQuizSolutionsByChallengeAndUser,
);
routes.delete(
  '/solutions/quiz/challenge/:quiz_challenge_id',
  requireLogin,
  requireAdmin,
  deleteQuizQuestionsByChallengeController.deleteQuizQuestionsByChallenge,
);

// ---- JS Solution Routes ---- //
routes.post(
  '/solutions/js/create',
  requireLogin,
  createJSSolutionController.createJSSolution,
);
routes.get(
  '/solutions/js/:id',
  requireLogin,
  readJSSolutionController.readJSSolution,
);
routes.get(
  '/solutions/js',
  requireLogin,
  readAllJSSolutionController.readAllJSSolution,
);
routes.get(
  '/solutions/js/user/:user_id',
  requireLogin,
  readJSSolutionsByUserController.readJSSolutionsByUser,
);
routes.get(
  '/solutions/js/challenge/:js_challenge_id',
  requireLogin,
  readJSSolutionsByChallengeController.readJSSolutionsByChallenge,
);
routes.get(
  '/solutions/js/challenge/:js_challenge_id/:user_id',
  requireLogin,
  readJSSolutionsByChallengeAndUserController.readJSSolutionsByChallengeAndUser,
);
routes.delete(
  '/solutions/js/challenge/:js_challenge_id',
  requireLogin,
  requireAdmin,
  deleteJSSolutionsByChallengeController.deleteJSSolutionsByChallenge,
);

// ---- JS Solution Likes Routes ---- //

routes.post(
  '/solutions/js/likes/create',
  requireLogin,
  createJSSolutionLikeController.createJSSolutionLike,
);
routes.get(
  '/solutions/js/likes/:js_solution_id',
  requireLogin,
  readJSSolutionsLikeBySolutionController.readJSSolutionsLikeBySolution,
);
routes.get(
  '/solutions/js/likes/:js_solution_id/:user_id',
  requireLogin,
  readJSSolutionsLikeByUserAndSolutionController.readJSSolutionsLikeByUserAndSolution,
);
routes.delete(
  '/solutions/js/likes/:js_solution_id',
  requireLogin,
  requireAdmin,
  deleteJSSolutionsLikeBySolutionController.deleteJSSolutionsLikeBySolution,
);
routes.delete(
  '/solutions/js/likes/:js_solution_id/:user_id',
  requireLogin,
  deleteJSSolutionsLikeByUserAndSolutionController.deleteJSSolutionsLikeByUserAndSolution,
);

// ---- HTML Solution Routes ---- //
routes.post(
  '/solutions/html/create',
  requireLogin,
  createHTMLSolutionController.createHTMLSolution,
);
routes.get(
  '/solutions/html/:id',
  requireLogin,
  readHTMLSolutionController.readHTMLSolution,
);
routes.get(
  '/solutions/html',
  requireLogin,
  readAllHTMLSolutionController.readAllHTMLSolution,
);
routes.get(
  '/solutions/html/user/:user_id',
  requireLogin,
  readHTMLSolutionsByUserController.readHTMLSolutionsByUser,
);
routes.get(
  '/solutions/html/challenge/:html_challenge_id',
  requireLogin,
  readHTMLSolutionsByChallengeController.readHTMLSolutionsByChallenge,
);
routes.get(
  '/solutions/html/challenge/:html_challenge_id/:user_id',
  requireLogin,
  readHTMLSolutionsByChallengeAndUserController.readHTMLSolutionsByChallengeAndUser,
);
routes.delete(
  '/solutions/html/challenge/:html_challenge_id',
  requireLogin,
  requireAdmin,
  deleteHTMLSolutionsByChallengeController.deleteHTMLSolutionsByChallenge,
);

// ---- HTML Solution Likes Routes ---- //

routes.post(
  '/solutions/html/likes/create',
  requireLogin,
  createHTMLSolutionLikeController.createHTMLSolutionLike,
);
routes.get(
  '/solutions/html/likes/:html_solution_id',
  requireLogin,
  readHTMLSolutionsLikeBySolutionController.readHTMLSolutionsLikeBySolution,
);
routes.get(
  '/solutions/html/likes/:html_solution_id/:user_id',
  requireLogin,
  readHTMLSolutionsLikeByUserAndSolutionController.readHTMLSolutionsLikeByUserAndSolution,
);
routes.delete(
  '/solutions/html/likes/:html_solution_id',
  requireLogin,
  requireAdmin,
  deleteHTMLSolutionsLikeBySolutionController.deleteHTMLSolutionsLikeBySolution,
);
routes.delete(
  '/solutions/html/likes/:html_solution_id/:user_id',
  requireLogin,
  deleteHTMLSolutionsLikeByUserAndSolutionController.deleteHTMLSolutionsLikeByUserAndSolution,
);

// ----------- 404 ------------

routes.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

// 404
routes.get('*', (req, res) => {
  res.status(404).json({ message: 'Página não encontrada.' });
});

export default routes;
