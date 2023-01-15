import { Request, Response } from 'express';
import { ReadQuizSolutionsByChallengeAndUserUseCase } from './ReadQuizSolutionsByChallengeAndUserUseCase';

export class ReadQuizSolutionsByChallengeAndUserController {
  constructor(
    private readQuizSolutionsByChallengeAndUserUseCase: ReadQuizSolutionsByChallengeAndUserUseCase,
  ) {
    this.readQuizSolutionsByChallengeAndUser =
      this.readQuizSolutionsByChallengeAndUser.bind(this);
  }

  public async readQuizSolutionsByChallengeAndUser(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id, quiz_challenge_id } = req.params;

      if (user_id && quiz_challenge_id) {
        const solution =
          await this.readQuizSolutionsByChallengeAndUserUseCase.execute({
            user_id,
            quiz_challenge_id,
          });

        if (this.readQuizSolutionsByChallengeAndUserUseCase.errors.length > 0) {
          const error =
            this.readQuizSolutionsByChallengeAndUserUseCase.errors[0];

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
