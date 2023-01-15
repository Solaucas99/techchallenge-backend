import { Request, Response } from 'express';
import dotenv from 'dotenv';

import { CreateHTMLSolutionLikeUseCase } from './CreateHTMLSolutionLikeUseCase';

export class CreateHTMLSolutionLikeController {
  constructor(
    private createHTMLSolutionLikeUseCase: CreateHTMLSolutionLikeUseCase,
  ) {
    this.createHTMLSolutionLike = this.createHTMLSolutionLike.bind(this);
    dotenv.config();
  }

  public async createHTMLSolutionLike(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const solution = await this.createHTMLSolutionLikeUseCase.execute({
        ...req.body,
      });

      return res.status(200).json({
        result: solution,
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
