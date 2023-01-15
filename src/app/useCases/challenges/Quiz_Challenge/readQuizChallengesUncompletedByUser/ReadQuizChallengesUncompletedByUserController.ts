import { Request, Response } from 'express';
import { ReadQuizChallengesUncompletedByUserUseCase } from './ReadQuizChallengesUncompletedByUserUseCase';

export class ReadQuizChallengesUncompletedByUserController {
  constructor(
    private readQuizChallengesUncompletedByUserUseCase: ReadQuizChallengesUncompletedByUserUseCase,
  ) {
    this.readQuizChallengesUncompletedByUser =
      this.readQuizChallengesUncompletedByUser.bind(this);
  }

  public async readQuizChallengesUncompletedByUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id } = req.params;

      if (user_id) {
        const challenge =
          await this.readQuizChallengesUncompletedByUserUseCase.execute(
            user_id,
          );

        if (this.readQuizChallengesUncompletedByUserUseCase.errors.length > 0) {
          const error =
            this.readQuizChallengesUncompletedByUserUseCase.errors[0];

          return res.status(error.errStatus).json({
            error: error.errMessage,
          });
        }

        return res.status(200).json({
          result: challenge,
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
