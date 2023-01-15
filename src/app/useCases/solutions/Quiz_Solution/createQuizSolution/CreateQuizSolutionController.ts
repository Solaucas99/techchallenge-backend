import { Request, Response } from 'express';
import { CreateQuizSolutionUseCase } from './CreateQuizSolutionUseCase';

export class CreateQuizSolutionController {
  constructor(private createQuizSolutionUseCase: CreateQuizSolutionUseCase) {
    this.createQuizSolution = this.createQuizSolution.bind(this);
  }

  public async createQuizSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const solution = await this.createQuizSolutionUseCase.execute(req.body);

      if (this.createQuizSolutionUseCase.errors.length > 0) {
        const error = this.createQuizSolutionUseCase.errors[0];

        return res.status(error.errStatus).json({
          error: error.errMessage,
        });
      }

      return res.status(200).json({
        result: solution,
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
