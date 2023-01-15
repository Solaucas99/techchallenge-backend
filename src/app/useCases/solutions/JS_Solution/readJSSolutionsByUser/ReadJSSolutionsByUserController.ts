import { Request, Response } from 'express';
import { ReadJSSolutionsByUserUseCase } from './ReadJSSolutionsByUserUseCase';

export class ReadJSSolutionsByUserController {
  constructor(
    private readJSSolutionsByUserUseCase: ReadJSSolutionsByUserUseCase,
  ) {
    this.readJSSolutionsByUser = this.readJSSolutionsByUser.bind(this);
  }

  public async readJSSolutionsByUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id } = req.params;

      if (user_id) {
        const solution = await this.readJSSolutionsByUserUseCase.execute({
          user_id,
        });

        if (this.readJSSolutionsByUserUseCase.errors.length > 0) {
          const error = this.readJSSolutionsByUserUseCase.errors[0];

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
