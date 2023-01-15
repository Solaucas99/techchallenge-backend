import { Request, Response } from 'express';
import { ReadAllQuizChallengeUseCase } from './ReadAllQuizChallengeUseCase';

export class ReadAllQuizChallengeController {
  constructor(
    private readAllQuizChallengeUseCase: ReadAllQuizChallengeUseCase,
  ) {
    this.readAllQuizChallenge = this.readAllQuizChallenge.bind(this);
  }

  public async readAllQuizChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const challenge = await this.readAllQuizChallengeUseCase.execute();

      if (this.readAllQuizChallengeUseCase.errors.length > 0) {
        const error = this.readAllQuizChallengeUseCase.errors[0];

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
