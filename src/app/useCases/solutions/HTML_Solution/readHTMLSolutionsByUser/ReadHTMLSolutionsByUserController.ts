import { Request, Response } from 'express';
import { ReadHTMLSolutionsByUserUseCase } from './ReadHTMLSolutionsByUserUseCase';

export class ReadHTMLSolutionsByUserController {
  constructor(
    private readHTMLSolutionsByUserUseCase: ReadHTMLSolutionsByUserUseCase,
  ) {
    this.readHTMLSolutionsByUser = this.readHTMLSolutionsByUser.bind(this);
  }

  public async readHTMLSolutionsByUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id } = req.params;

      if (user_id) {
        const solution = await this.readHTMLSolutionsByUserUseCase.execute({
          user_id,
        });

        if (this.readHTMLSolutionsByUserUseCase.errors.length > 0) {
          const error = this.readHTMLSolutionsByUserUseCase.errors[0];

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
