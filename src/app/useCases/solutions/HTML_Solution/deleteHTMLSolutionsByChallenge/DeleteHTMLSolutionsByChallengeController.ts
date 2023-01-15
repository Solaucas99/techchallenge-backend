import { Request, Response } from 'express';
import { DeleteHTMLSolutionsByChallengeUseCase } from './DeleteHTMLSolutionsByChallengeUseCase';

export class DeleteHTMLSolutionsByChallengeController {
  constructor(
    private deleteHTMLSolutionsByChallengeUseCase: DeleteHTMLSolutionsByChallengeUseCase,
  ) {
    this.deleteHTMLSolutionsByChallenge =
      this.deleteHTMLSolutionsByChallenge.bind(this);
  }

  public async deleteHTMLSolutionsByChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { html_challenge_id } = req.params;

      if (html_challenge_id) {
        const solution =
          await this.deleteHTMLSolutionsByChallengeUseCase.execute({
            html_challenge_id,
          });

        if (this.deleteHTMLSolutionsByChallengeUseCase.errors.length > 0) {
          const error = this.deleteHTMLSolutionsByChallengeUseCase.errors[0];

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
