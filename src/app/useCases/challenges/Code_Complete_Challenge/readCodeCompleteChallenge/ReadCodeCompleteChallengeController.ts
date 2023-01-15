import { Request, Response } from 'express';
import { ReadCodeCompleteChallengeUseCase } from './ReadCodeCompleteChallengeUseCase';

export class ReadCodeCompleteChallengeController {
  constructor(
    private readCodeCompleteChallengeUseCase: ReadCodeCompleteChallengeUseCase,
  ) {
    this.readCodeCompleteChallenge = this.readCodeCompleteChallenge.bind(this);
  }

  public async readCodeCompleteChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const challenge = await this.readCodeCompleteChallengeUseCase.execute({
          id,
        });

        if (this.readCodeCompleteChallengeUseCase.errors.length > 0) {
          const error = this.readCodeCompleteChallengeUseCase.errors[0];

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
