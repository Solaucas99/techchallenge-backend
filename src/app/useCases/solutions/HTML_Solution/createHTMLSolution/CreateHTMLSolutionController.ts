import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';
import dotenv from 'dotenv';

import { CreateHTMLSolutionUseCase } from './CreateHTMLSolutionUseCase';

export class CreateHTMLSolutionController {
  constructor(private createHTMLSolutionUseCase: CreateHTMLSolutionUseCase) {
    this.createHTMLSolution = this.createHTMLSolution.bind(this);
    dotenv.config();
  }

  public async createHTMLSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const solutionsDirectory = path.join(
        __dirname,
        `../../../../assets/solutions/html/${req.body.user_id}/${req.body.html_challenge_id}/solution/solution.js`,
      );

      if (!fs.existsSync(solutionsDirectory)) {
        return res.status(404).json({
          message:
            'Para submeter um desafio HTML, o mesmo deve ter passado pelos testes automatizados antes',
        });
      }

      const solution = await this.createHTMLSolutionUseCase.execute({
        ...req.body,
        solution_submitted:
          process.env.DOMAIN +
          `/solutions/html/${req.body.user_id}/${req.body.html_challenge_id}/solution/solution.js`,
      });

      return res.status(200).json({
        result: solution,
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
