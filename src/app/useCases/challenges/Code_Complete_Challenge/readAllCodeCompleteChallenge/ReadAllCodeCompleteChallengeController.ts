import { Request, Response } from 'express';
import { ReadAllCodeCompleteChallengeUseCase } from './ReadAllCodeCompleteUseCase';

export class ReadAllCodeCompleteChallengeController {
  constructor(
    private readAllCodeCompleteChallengeUseCase: ReadAllCodeCompleteChallengeUseCase,
  ) {
    this.readAllCodeCompleteChallenge =
      this.readAllCodeCompleteChallenge.bind(this);
  }

  public async readAllCodeCompleteChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const challenge =
        await this.readAllCodeCompleteChallengeUseCase.execute();

      if (this.readAllCodeCompleteChallengeUseCase.errors.length > 0) {
        const error = this.readAllCodeCompleteChallengeUseCase.errors[0];

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
