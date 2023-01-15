import { Request, Response } from 'express';
import { ReadCodeCompleteChallengesUncompletedByUserUseCase } from './ReadCodeCompleteChallengesUncompletedByUserUseCase';

export class ReadCodeCompleteChallengesUncompletedByUserController {
  constructor(
    private readCodeCompleteChallengesUncompletedByUserUseCase: ReadCodeCompleteChallengesUncompletedByUserUseCase,
  ) {
    this.readCodeCompleteChallengesUncompletedByUser =
      this.readCodeCompleteChallengesUncompletedByUser.bind(this);
  }

  public async readCodeCompleteChallengesUncompletedByUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id } = req.params;

      if (user_id) {
        const challenge =
          await this.readCodeCompleteChallengesUncompletedByUserUseCase.execute(
            user_id,
          );

        if (
          this.readCodeCompleteChallengesUncompletedByUserUseCase.errors
            .length > 0
        ) {
          const error =
            this.readCodeCompleteChallengesUncompletedByUserUseCase.errors[0];

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
      return res.status(400).json({ message: 'Unexpected Error' });
    }
  }
}
