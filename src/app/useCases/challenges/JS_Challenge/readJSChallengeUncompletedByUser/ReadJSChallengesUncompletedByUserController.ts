import { Request, Response } from 'express';
import { ReadJSChallengesUncompletedByUserUseCase } from './ReadJSChallengesUncompletedByUserUseCase';

export class ReadJSChallengesUncompletedByUserController {
  constructor(
    private readJSChallengesUncompletedByUserUseCase: ReadJSChallengesUncompletedByUserUseCase,
  ) {
    this.readJSChallengesUncompletedByUser =
      this.readJSChallengesUncompletedByUser.bind(this);
  }

  public async readJSChallengesUncompletedByUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id } = req.params;

      if (user_id) {
        const challenge =
          await this.readJSChallengesUncompletedByUserUseCase.execute(user_id);

        if (this.readJSChallengesUncompletedByUserUseCase.errors.length > 0) {
          const error = this.readJSChallengesUncompletedByUserUseCase.errors[0];

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
