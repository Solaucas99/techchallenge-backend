import { Request, Response } from 'express';
import { DeleteQuizQuestionUseCase } from './DeleteQuizQuestionUseCase';

export class DeleteQuizQuestionController {
  constructor(private deleteQuizQuestionUseCase: DeleteQuizQuestionUseCase) {
    this.deleteQuizQuestion = this.deleteQuizQuestion.bind(this);
  }

  public async deleteQuizQuestion(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const question = await this.deleteQuizQuestionUseCase.execute({ id });

        if (this.deleteQuizQuestionUseCase.errors.length > 0) {
          const error = this.deleteQuizQuestionUseCase.errors[0];

          return res.status(error.errStatus).json({
            error: error.errMessage,
          });
        }

        return res.status(200).json({ result: question });
      }

      return res.status(404).json({
        error: 'Parametro ID não enviado',
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
