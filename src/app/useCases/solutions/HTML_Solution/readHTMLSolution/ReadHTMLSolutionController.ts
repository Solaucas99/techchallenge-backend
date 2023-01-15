import { Request, Response } from 'express';
import { ReadHTMLSolutionUseCase } from './ReadHTMLSolutionUseCase';

export class ReadHTMLSolutionController {
  constructor(private readHTMLSolutionUseCase: ReadHTMLSolutionUseCase) {
    this.readHTMLSolution = this.readHTMLSolution.bind(this);
  }

  public async readHTMLSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const solution = await this.readHTMLSolutionUseCase.execute({ id });

        if (this.readHTMLSolutionUseCase.errors.length > 0) {
          const error = this.readHTMLSolutionUseCase.errors[0];

          return res.status(error.errStatus).json({
            error: error.errMessage,
          });
        }

        return res.status(200).json({
          result: solution,
        });
      }

      return res.status(404).json({
        error: 'Parametro ID não enviado',
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
