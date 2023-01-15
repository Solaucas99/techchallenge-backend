import { Request, Response } from 'express';
import { ReadQuizSolutionsByUserUseCase } from './ReadQuizSolutionsByUserUseCase';

export class ReadQuizSolutionsByUserController {
  constructor(
    private readQuizSolutionsByUserUseCase: ReadQuizSolutionsByUserUseCase,
  ) {
    this.readQuizSolutionsByUser = this.readQuizSolutionsByUser.bind(this);
  }

  public async readQuizSolutionsByUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id } = req.params;

      if (user_id) {
        const solution = await this.readQuizSolutionsByUserUseCase.execute({
          user_id,
        });

        if (this.readQuizSolutionsByUserUseCase.errors.length > 0) {
          const error = this.readQuizSolutionsByUserUseCase.errors[0];

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
