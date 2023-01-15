import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';
import dotenv from 'dotenv';

import { CreateJSSolutionUseCase } from './CreateJSSolutionUseCase';

export class CreateJSSolutionController {
  constructor(private createJSSolutionUseCase: CreateJSSolutionUseCase) {
    this.createJSSolution = this.createJSSolution.bind(this);
    dotenv.config();
  }

  public async createJSSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const solutionsDirectory = path.join(
        __dirname,
        `../../../../assets/solutions/js/${req.body.user_id}/${req.body.js_challenge_id}/solution/solution.js`,
      );

      if (!fs.existsSync(solutionsDirectory)) {
        return res.status(404).json({
          message:
            'Para submeter um desafio JS, o mesmo deve ter passado pelos testes automatizados antes',
        });
      }

      const solution = await this.createJSSolutionUseCase.execute({
        ...req.body,
        solution_submitted:
          process.env.DOMAIN +
          `/solutions/js/${req.body.user_id}/${req.body.js_challenge_id}/solution/solution.js`,
      });

      return res.status(200).json({
        result: solution,
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
