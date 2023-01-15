import { Request, Response } from 'express';
import { ReadJSSolutionUseCase } from './ReadJSSolutionUseCase';

export class ReadJSSolutionController {
  constructor(private readJSSolutionUseCase: ReadJSSolutionUseCase) {
    this.readJSSolution = this.readJSSolution.bind(this);
  }

  public async readJSSolution(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const solution = await this.readJSSolutionUseCase.execute({ id });

        if (this.readJSSolutionUseCase.errors.length > 0) {
          const error = this.readJSSolutionUseCase.errors[0];

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
