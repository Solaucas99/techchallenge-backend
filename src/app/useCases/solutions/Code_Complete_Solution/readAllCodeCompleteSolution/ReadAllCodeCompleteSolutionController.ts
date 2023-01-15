import { Request, Response } from 'express';
import { ReadAllCodeCompleteSolutionUseCase } from './ReadAllCodeCompleteSolutionUseCase';

export class ReadAllCodeCompleteSolutionController {
  constructor(
    private readAllCodeCompleteSolutionUseCase: ReadAllCodeCompleteSolutionUseCase,
  ) {
    this.readAllCodeCompleteSolution =
      this.readAllCodeCompleteSolution.bind(this);
  }

  public async readAllCodeCompleteSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const solution = await this.readAllCodeCompleteSolutionUseCase.execute();

      if (this.readAllCodeCompleteSolutionUseCase.errors.length > 0) {
        const error = this.readAllCodeCompleteSolutionUseCase.errors[0];

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
