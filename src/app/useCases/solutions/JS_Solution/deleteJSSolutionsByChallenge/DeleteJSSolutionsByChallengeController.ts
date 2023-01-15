import { Request, Response } from 'express';
import { DeleteJSSolutionsByChallengeUseCase } from './DeleteJSSolutionsByChallengeUseCase';

export class DeleteJSSolutionsByChallengeController {
  constructor(
    private deleteJSSolutionsByChallengeUseCase: DeleteJSSolutionsByChallengeUseCase,
  ) {
    this.deleteJSSolutionsByChallenge =
      this.deleteJSSolutionsByChallenge.bind(this);
  }

  public async deleteJSSolutionsByChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { js_challenge_id } = req.params;

      if (js_challenge_id) {
        const solution = await this.deleteJSSolutionsByChallengeUseCase.execute(
          {
            js_challenge_id,
          },
        );

        if (this.deleteJSSolutionsByChallengeUseCase.errors.length > 0) {
          const error = this.deleteJSSolutionsByChallengeUseCase.errors[0];

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
