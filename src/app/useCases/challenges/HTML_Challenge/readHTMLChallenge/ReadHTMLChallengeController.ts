import { Request, Response } from 'express';
import { ReadHTMLChallengeUseCase } from './ReadHTMLChallengeUseCase';

export class ReadHTMLChallengeController {
  constructor(private readHTMLChallengeUseCase: ReadHTMLChallengeUseCase) {
    this.readHTMLChallenge = this.readHTMLChallenge.bind(this);
  }

  public async readHTMLChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const challenge = await this.readHTMLChallengeUseCase.execute({ id });

        if (this.readHTMLChallengeUseCase.errors.length > 0) {
          const error = this.readHTMLChallengeUseCase.errors[0];

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
