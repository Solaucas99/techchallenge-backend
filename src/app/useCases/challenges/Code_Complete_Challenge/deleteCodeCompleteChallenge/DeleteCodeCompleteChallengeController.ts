import { Request, Response } from 'express';
import { DeleteCodeCompleteChallengeUseCase } from './DeleteCodeCompleteChallengeUseCase';

export class DeleteCodeCompleteChallengeController {
  constructor(
    private deleteCodeCompleteChallengeUseCase: DeleteCodeCompleteChallengeUseCase,
  ) {
    this.deleteCodeCompleteChallenge =
      this.deleteCodeCompleteChallenge.bind(this);
  }

  public async deleteCodeCompleteChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const challenge = await this.deleteCodeCompleteChallengeUseCase.execute(
          { id },
        );

        if (this.deleteCodeCompleteChallengeUseCase.errors.length > 0) {
          const error = this.deleteCodeCompleteChallengeUseCase.errors[0];

          return res.status(error.errStatus).json({
            error: error.errMessage,
          });
        }

        return res.status(200).json({ result: challenge });
      }

      return res.status(404).json({
        error: 'Parametro ID não enviado',
      });
    } catch (err: any) {
      return res.status(400).json({ message: 'Unexpected Error' });
    }
  }
}
