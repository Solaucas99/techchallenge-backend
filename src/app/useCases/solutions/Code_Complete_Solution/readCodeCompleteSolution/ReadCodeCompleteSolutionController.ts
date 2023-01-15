import { Request, Response } from 'express';
import { ReadCodeCompleteSolutionUseCase } from './ReadCodeCompleteSolutionUseCase';

export class ReadCodeCompleteSolutionController {
  constructor(
    private readCodeCompleteSolutionUseCase: ReadCodeCompleteSolutionUseCase,
  ) {
    this.readCodeCompleteSolution = this.readCodeCompleteSolution.bind(this);
  }

  public async readCodeCompleteSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const solution = await this.readCodeCompleteSolutionUseCase.execute({
          id,
        });

        if (this.readCodeCompleteSolutionUseCase.errors.length > 0) {
          const error = this.readCodeCompleteSolutionUseCase.errors[0];

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
