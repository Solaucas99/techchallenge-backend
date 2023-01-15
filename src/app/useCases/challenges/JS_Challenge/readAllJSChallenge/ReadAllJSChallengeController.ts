import { Request, Response } from 'express';
import { ReadAllJSChallengeUseCase } from './ReadAllJSChallengeUseCase';

export class ReadAllJSChallengeController {
  constructor(private readAllJSChallengeUseCase: ReadAllJSChallengeUseCase) {
    this.readAllJSChallenge = this.readAllJSChallenge.bind(this);
  }

  public async readAllJSChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const challenge = await this.readAllJSChallengeUseCase.execute();

      if (this.readAllJSChallengeUseCase.errors.length > 0) {
        const error = this.readAllJSChallengeUseCase.errors[0];

        return res.status(error.errStatus).json({
          error: error.errMessage,
        });
      }

      return res.status(200).json({
        result: challenge,
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
