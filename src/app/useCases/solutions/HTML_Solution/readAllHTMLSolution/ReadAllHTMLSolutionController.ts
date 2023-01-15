import { Request, Response } from 'express';
import { ReadAllHTMLSolutionUseCase } from './ReadAllHTMLSolutionUseCase';

export class ReadAllHTMLSolutionController {
  constructor(private readAllHTMLSolutionUseCase: ReadAllHTMLSolutionUseCase) {
    this.readAllHTMLSolution = this.readAllHTMLSolution.bind(this);
  }

  public async readAllHTMLSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const solution = await this.readAllHTMLSolutionUseCase.execute();

      if (this.readAllHTMLSolutionUseCase.errors.length > 0) {
        const error = this.readAllHTMLSolutionUseCase.errors[0];

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
