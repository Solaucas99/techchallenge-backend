import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';

import { testController } from './app/useCases/tests';
import { requireLogin } from '@middlewares/requireLogin';

const routes = Router();
dotenv.config();

routes.get('/', async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is ok!' });
});

// ---- Test Routes ---- //
routes.post('/tests/run', requireLogin, testController.test);

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
