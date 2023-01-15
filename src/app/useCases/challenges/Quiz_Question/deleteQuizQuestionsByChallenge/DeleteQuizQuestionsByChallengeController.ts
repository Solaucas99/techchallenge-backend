import { Request, Response } from 'express';
import { DeleteQuizQuestionsByChallengeUseCase } from './DeleteQuizQuestionsByChallengeUseCase';

export class DeleteQuizQuestionsByChallengeController {
  constructor(
    private deleteQuizQuestionsByChallengeUseCase: DeleteQuizQuestionsByChallengeUseCase,
  ) {
    this.deleteQuizQuestionsByChallenge =
      this.deleteQuizQuestionsByChallenge.bind(this);
  }

  public async deleteQuizQuestionsByChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { quiz_challenge_id } = req.params;

      if (quiz_challenge_id) {
        const question =
          await this.deleteQuizQuestionsByChallengeUseCase.execute({
            quiz_challenge_id,
          });

        if (this.deleteQuizQuestionsByChallengeUseCase.errors.length > 0) {
          const error = this.deleteQuizQuestionsByChallengeUseCase.errors[0];

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
