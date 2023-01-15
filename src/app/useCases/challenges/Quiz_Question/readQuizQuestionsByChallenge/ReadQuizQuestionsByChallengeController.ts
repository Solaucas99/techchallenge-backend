import { Request, Response } from 'express';
import { ReadQuizQuestionsByChallengeUseCase } from './ReadQuizQuestionsByChallengeUseCase';

export class ReadQuizQuestionsByChallengeController {
  constructor(
    private readQuizQuestionsByChallengeUseCase: ReadQuizQuestionsByChallengeUseCase,
  ) {
    this.readQuizQuestionsByChallenge =
      this.readQuizQuestionsByChallenge.bind(this);
  }

  public async readQuizQuestionsByChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { quiz_challenge_id } = req.params;

      if (quiz_challenge_id) {
        const question = await this.readQuizQuestionsByChallengeUseCase.execute(
          { quiz_challenge_id },
        );

        if (this.readQuizQuestionsByChallengeUseCase.errors.length > 0) {
          const error = this.readQuizQuestionsByChallengeUseCase.errors[0];

          return res.status(error.errStatus).json({
            error: error.errMessage,
          });
        }

        return res.status(200).json({
          result: question,
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
