import { Request, Response } from 'express';
import { ReadHTMLSolutionsByChallengeAndUserUseCase } from './ReadHTMLSolutionsByChallengeAndUserUseCase';

export class ReadHTMLSolutionsByChallengeAndUserController {
  constructor(
    private readHTMLSolutionsByChallengeAndUserUseCase: ReadHTMLSolutionsByChallengeAndUserUseCase,
  ) {
    this.readHTMLSolutionsByChallengeAndUser =
      this.readHTMLSolutionsByChallengeAndUser.bind(this);
  }

  public async readHTMLSolutionsByChallengeAndUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id, html_challenge_id } = req.params;

      if (user_id && html_challenge_id) {
        const solution =
          await this.readHTMLSolutionsByChallengeAndUserUseCase.execute({
            user_id,
            html_challenge_id,
          });

        if (this.readHTMLSolutionsByChallengeAndUserUseCase.errors.length > 0) {
          const error =
            this.readHTMLSolutionsByChallengeAndUserUseCase.errors[0];

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
