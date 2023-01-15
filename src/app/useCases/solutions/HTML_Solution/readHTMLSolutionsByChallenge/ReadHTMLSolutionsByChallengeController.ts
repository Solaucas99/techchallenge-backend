import { Request, Response } from 'express';
import { ReadHTMLSolutionsByChallengeUseCase } from './ReadHTMLSolutionsByChallengeUseCase';

export class ReadHTMLSolutionsByChallengeController {
  constructor(
    private readHTMLSolutionsByChallengeUseCase: ReadHTMLSolutionsByChallengeUseCase,
  ) {
    this.readHTMLSolutionsByChallenge =
      this.readHTMLSolutionsByChallenge.bind(this);
  }

  public async readHTMLSolutionsByChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { html_challenge_id } = req.params;

      if (html_challenge_id) {
        const solution = await this.readHTMLSolutionsByChallengeUseCase.execute(
          {
            html_challenge_id,
          },
        );

        if (this.readHTMLSolutionsByChallengeUseCase.errors.length > 0) {
          const error = this.readHTMLSolutionsByChallengeUseCase.errors[0];

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
