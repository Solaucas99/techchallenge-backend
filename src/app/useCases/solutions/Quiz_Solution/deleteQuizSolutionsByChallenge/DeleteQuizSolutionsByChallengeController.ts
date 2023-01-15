import { Request, Response } from 'express';
import { DeleteQuizSolutionsByChallengeUseCase } from './DeleteQuizSolutionsByChallengeUseCase';

export class DeleteQuizSolutionsByChallengeController {
  constructor(
    private deleteQuizSolutionsByChallengeUseCase: DeleteQuizSolutionsByChallengeUseCase,
  ) {
    this.deleteQuizSolutionsByChallenge =
      this.deleteQuizSolutionsByChallenge.bind(this);
  }

  public async deleteQuizSolutionsByChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { quiz_challenge_id } = req.params;

      if (quiz_challenge_id) {
        const solution =
          await this.deleteQuizSolutionsByChallengeUseCase.execute({
            quiz_challenge_id,
          });

        if (this.deleteQuizSolutionsByChallengeUseCase.errors.length > 0) {
          const error = this.deleteQuizSolutionsByChallengeUseCase.errors[0];

          return res.status(error.errStatus).json({
            error: error.errMessage,
          });
        }

        return res.status(200).json({
          result: solution,
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
