import { Request, Response } from 'express';
import { CreateCodeCompleteSolutionUseCase } from './CreateCodeCompleteSolutionUseCase';

export class CreateCodeCompleteSolutionController {
  constructor(
    private createCodeCompleteSolutionUseCase: CreateCodeCompleteSolutionUseCase,
  ) {
    this.createCodeCompleteSolution =
      this.createCodeCompleteSolution.bind(this);
  }

  public async createCodeCompleteSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const solution = await this.createCodeCompleteSolutionUseCase.execute(
        req.body,
      );

      if (this.createCodeCompleteSolutionUseCase.errors.length > 0) {
        const error = this.createCodeCompleteSolutionUseCase.errors[0];

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
