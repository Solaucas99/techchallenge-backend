import { Request, Response } from 'express';
import { DeleteHTMLChallengeUseCase } from './DeleteHTMLChallengeUseCase';

export class DeleteHTMLChallengeController {
  constructor(private deleteHTMLChallengeUseCase: DeleteHTMLChallengeUseCase) {
    this.deleteHTMLChallenge = this.deleteHTMLChallenge.bind(this);
  }

  public async deleteHTMLChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const challenge = await this.deleteHTMLChallengeUseCase.execute({ id });

        if (this.deleteHTMLChallengeUseCase.errors.length > 0) {
          const error = this.deleteHTMLChallengeUseCase.errors[0];

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
