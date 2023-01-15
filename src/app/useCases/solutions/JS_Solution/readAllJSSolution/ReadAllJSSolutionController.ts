import { Request, Response } from 'express';
import { ReadAllJSSolutionUseCase } from './ReadAllJSSolutionUseCase';

export class ReadAllJSSolutionController {
  constructor(private readAllJSSolutionUseCase: ReadAllJSSolutionUseCase) {
    this.readAllJSSolution = this.readAllJSSolution.bind(this);
  }

  public async readAllJSSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const solution = await this.readAllJSSolutionUseCase.execute();

      if (this.readAllJSSolutionUseCase.errors.length > 0) {
        const error = this.readAllJSSolutionUseCase.errors[0];

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
