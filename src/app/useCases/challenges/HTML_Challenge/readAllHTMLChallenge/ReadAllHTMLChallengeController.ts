import { Request, Response } from 'express';
import { ReadAllHTMLChallengeUseCase } from './ReadAllHTMLChallengeUseCase';

export class ReadAllHTMLChallengeController {
  constructor(
    private readAllHTMLChallengeUseCase: ReadAllHTMLChallengeUseCase,
  ) {
    this.readAllHTMLChallenge = this.readAllHTMLChallenge.bind(this);
  }

  public async readAllHTMLChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const challenge = await this.readAllHTMLChallengeUseCase.execute();

      if (this.readAllHTMLChallengeUseCase.errors.length > 0) {
        const error = this.readAllHTMLChallengeUseCase.errors[0];

        return res.status(error.errStatus).json({
          error: error.errMessage,
        });
      }

      return res.status(200).json({
        result: challenge,
      });
    } catch (err: any) {
      return res.status(400).json({ message: 'Unexpected Error' });
    }
  }
}
