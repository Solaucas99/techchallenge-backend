import { Request, Response } from 'express';
import { ReadCodeCompleteSolutionsByChallengeAndUserUseCase } from './ReadCodeCompleteSolutionsByChallengeAndUserUseCase';

export class ReadCodeCompleteSolutionsByChallengeAndUserController {
  constructor(
    private readCodeCompleteSolutionsByChallengeAndUserUseCase: ReadCodeCompleteSolutionsByChallengeAndUserUseCase,
  ) {
    this.readCodeCompleteSolutionsByChallengeAndUser =
      this.readCodeCompleteSolutionsByChallengeAndUser.bind(this);
  }

  public async readCodeCompleteSolutionsByChallengeAndUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id, code_complete_challenge_id } = req.params;

      if (user_id && code_complete_challenge_id) {
        const solution =
          await this.readCodeCompleteSolutionsByChallengeAndUserUseCase.execute(
            {
              user_id,
              code_complete_challenge_id,
            },
          );

        if (
          this.readCodeCompleteSolutionsByChallengeAndUserUseCase.errors
            .length > 0
        ) {
          const error =
            this.readCodeCompleteSolutionsByChallengeAndUserUseCase.errors[0];

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
