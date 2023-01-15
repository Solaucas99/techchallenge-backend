import { Request, Response } from 'express';
import { ReadJSSolutionsByChallengeUseCase } from './ReadJSSolutionsByChallengeUseCase';

export class ReadJSSolutionsByChallengeController {
  constructor(
    private readJSSolutionsByChallengeUseCase: ReadJSSolutionsByChallengeUseCase,
  ) {
    this.readJSSolutionsByChallenge =
      this.readJSSolutionsByChallenge.bind(this);
  }

  public async readJSSolutionsByChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { js_challenge_id } = req.params;

      if (js_challenge_id) {
        const solution = await this.readJSSolutionsByChallengeUseCase.execute({
          js_challenge_id,
        });

        if (this.readJSSolutionsByChallengeUseCase.errors.length > 0) {
          const error = this.readJSSolutionsByChallengeUseCase.errors[0];

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
