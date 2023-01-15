import { Request, Response } from 'express';
import { ReadAllQuizSolutionUseCase } from './ReadAllQuizSolutionUseCase';

export class ReadAllQuizSolutionController {
  constructor(private readAllQuizSolutionUseCase: ReadAllQuizSolutionUseCase) {
    this.readAllQuizSolution = this.readAllQuizSolution.bind(this);
  }

  public async readAllQuizSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const solution = await this.readAllQuizSolutionUseCase.execute();

      if (this.readAllQuizSolutionUseCase.errors.length > 0) {
        const error = this.readAllQuizSolutionUseCase.errors[0];

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
