import { Request, Response } from 'express';
import { ReadHTMLChallengesUncompletedByUserUseCase } from './ReadHTMLChallengesUncompletedByUserUseCase';

export class ReadHTMLChallengesUncompletedByUserController {
  constructor(
    private readHTMLChallengesUncompletedByUserUseCase: ReadHTMLChallengesUncompletedByUserUseCase,
  ) {
    this.readHTMLChallengesUncompletedByUser =
      this.readHTMLChallengesUncompletedByUser.bind(this);
  }

  public async readHTMLChallengesUncompletedByUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id } = req.params;

      if (user_id) {
        const challenge =
          await this.readHTMLChallengesUncompletedByUserUseCase.execute(
            user_id,
          );

        if (this.readHTMLChallengesUncompletedByUserUseCase.errors.length > 0) {
          const error =
            this.readHTMLChallengesUncompletedByUserUseCase.errors[0];

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
