import { Request, Response } from 'express';
import { DeleteJSChallengeUseCase } from './DeleteJSChallengeUseCase';

export class DeleteJSChallengeController {
  constructor(private deleteJSChallengeUseCase: DeleteJSChallengeUseCase) {
    this.deleteJSChallenge = this.deleteJSChallenge.bind(this);
  }

  public async deleteJSChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const challenge = await this.deleteJSChallengeUseCase.execute({ id });

        if (this.deleteJSChallengeUseCase.errors.length > 0) {
          const error = this.deleteJSChallengeUseCase.errors[0];

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
