import { Request, Response } from 'express';
import { CreateQuizChallengeUseCase } from './CreateQuizChallengeUseCase';

export class CreateQuizChallengeController {
  constructor(private createQuizChallengeUseCase: CreateQuizChallengeUseCase) {
    this.createQuizChallenge = this.createQuizChallenge.bind(this);
  }

  public async createQuizChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const challenge = await this.createQuizChallengeUseCase.execute(req.body);

      return res.status(200).json({
        result: challenge,
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
