import { Request, Response } from 'express';
import { ReadQuizQuestionUseCase } from './ReadQuizQuestionUseCase';

export class ReadQuizQuestionController {
  constructor(private readQuizQuestionUseCase: ReadQuizQuestionUseCase) {
    this.readQuizQuestion = this.readQuizQuestion.bind(this);
  }

  public async readQuizQuestion(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { id } = req.params;

      if (id) {
        const question = await this.readQuizQuestionUseCase.execute({ id });

        if (this.readQuizQuestionUseCase.errors.length > 0) {
          const error = this.readQuizQuestionUseCase.errors[0];

          return res.status(error.errStatus).json({
            error: error.errMessage,
          });
        }

        return res.status(200).json({
          result: question,
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
