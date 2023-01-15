import { Request, Response } from 'express';
import { ReadQuizSolutionUseCase } from './ReadQuizSolutionUseCase';

export class ReadQuizSolutionController {
  constructor(private readQuizSolutionUseCase: ReadQuizSolutionUseCase) {
    this.readQuizSolution = this.readQuizSolution.bind(this);
  }

  public async readQuizSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const solution = await this.readQuizSolutionUseCase.execute({ id });

        if (this.readQuizSolutionUseCase.errors.length > 0) {
          const error = this.readQuizSolutionUseCase.errors[0];

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
