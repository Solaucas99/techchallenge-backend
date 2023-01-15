import { Request, Response } from 'express';
import { DeleteCodeCompleteSolutionsByChallengeUseCase } from './DeleteCodeCompleteSolutionsByChallengeUseCase';

export class DeleteCodeCompleteSolutionsByChallengeController {
  constructor(
    private deleteCodeCompleteSolutionsByChallengeUseCase: DeleteCodeCompleteSolutionsByChallengeUseCase,
  ) {
    this.deleteCodeCompleteSolutionsByChallenge =
      this.deleteCodeCompleteSolutionsByChallenge.bind(this);
  }

  public async deleteCodeCompleteSolutionsByChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { code_complete_challenge_id } = req.params;

      if (code_complete_challenge_id) {
        const solution =
          await this.deleteCodeCompleteSolutionsByChallengeUseCase.execute({
            code_complete_challenge_id,
          });

        if (
          this.deleteCodeCompleteSolutionsByChallengeUseCase.errors.length > 0
        ) {
          const error =
            this.deleteCodeCompleteSolutionsByChallengeUseCase.errors[0];

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
