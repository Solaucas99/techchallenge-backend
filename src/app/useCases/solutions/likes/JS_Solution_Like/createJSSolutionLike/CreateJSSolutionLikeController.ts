import { Request, Response } from 'express';
import dotenv from 'dotenv';

import { CreateJSSolutionLikeUseCase } from './CreateJSSolutionLikeUseCase';

export class CreateJSSolutionLikeController {
  constructor(
    private createJSSolutionLikeUseCase: CreateJSSolutionLikeUseCase,
  ) {
    this.createJSSolutionLike = this.createJSSolutionLike.bind(this);
    dotenv.config();
  }

  public async createJSSolutionLike(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const solution = await this.createJSSolutionLikeUseCase.execute({
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
