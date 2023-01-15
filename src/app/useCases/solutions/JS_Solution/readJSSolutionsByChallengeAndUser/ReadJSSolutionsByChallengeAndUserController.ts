import { Request, Response } from 'express';
import { ReadJSSolutionsByChallengeAndUserUseCase } from './ReadJSSolutionsByChallengeAndUserUseCase';

export class ReadJSSolutionsByChallengeAndUserController {
  constructor(
    private readJSSolutionsByChallengeAndUserUseCase: ReadJSSolutionsByChallengeAndUserUseCase,
  ) {
    this.readJSSolutionsByChallengeAndUser =
      this.readJSSolutionsByChallengeAndUser.bind(this);
  }

  public async readJSSolutionsByChallengeAndUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id, js_challenge_id } = req.params;

      if (user_id && js_challenge_id) {
        const solution =
          await this.readJSSolutionsByChallengeAndUserUseCase.execute({
            user_id,
            js_challenge_id,
          });

        if (this.readJSSolutionsByChallengeAndUserUseCase.errors.length > 0) {
          const error = this.readJSSolutionsByChallengeAndUserUseCase.errors[0];

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
