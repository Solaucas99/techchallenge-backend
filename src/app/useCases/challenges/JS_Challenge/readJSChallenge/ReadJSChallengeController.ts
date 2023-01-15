import { Request, Response } from 'express';
import { ReadJSChallengeUseCase } from './ReadJSChallengeUseCase';

export class ReadJSChallengeController {
  constructor(private readJSChallengeUseCase: ReadJSChallengeUseCase) {
    this.readJSChallenge = this.readJSChallenge.bind(this);
  }

  public async readJSChallenge(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const challenge = await this.readJSChallengeUseCase.execute({ id });

        if (this.readJSChallengeUseCase.errors.length > 0) {
          const error = this.readJSChallengeUseCase.errors[0];

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
