import { Request, Response } from 'express';
import { DeleteQuizChallengeUseCase } from './DeleteQuizChallengeUseCase';

export class DeleteQuizChallengeController {
  constructor(private deleteQuizChallengeUseCase: DeleteQuizChallengeUseCase) {
    this.deleteQuizChallenge = this.deleteQuizChallenge.bind(this);
  }

  public async deleteQuizChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const challenge = await this.deleteQuizChallengeUseCase.execute({ id });

        if (this.deleteQuizChallengeUseCase.errors.length > 0) {
          const error = this.deleteQuizChallengeUseCase.errors[0];

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
      return res.status(400).json({ message: err.message });
    }
  }
}
