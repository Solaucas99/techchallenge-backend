import { Request, Response } from 'express';
import { ReadCodeCompleteSolutionsByUserUseCase } from './ReadCodeCompleteSolutionsByUserUseCase';

export class ReadCodeCompleteSolutionsByUserController {
  constructor(
    private readCodeCompleteSolutionsByUserUseCase: ReadCodeCompleteSolutionsByUserUseCase,
  ) {
    this.readCodeCompleteSolutionsByUser =
      this.readCodeCompleteSolutionsByUser.bind(this);
  }

  public async readCodeCompleteSolutionsByUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id } = req.params;

      if (user_id) {
        const solution =
          await this.readCodeCompleteSolutionsByUserUseCase.execute({
            user_id,
          });

        if (this.readCodeCompleteSolutionsByUserUseCase.errors.length > 0) {
          const error = this.readCodeCompleteSolutionsByUserUseCase.errors[0];

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
