import { Request, Response } from 'express';
import { ReadAllQuizQuestionUseCase } from './ReadAllQuizQuestionUseCase';

export class ReadAllQuizQuestionController {
  constructor(private readAllQuizQuestionUseCase: ReadAllQuizQuestionUseCase) {
    this.readAllQuizQuestion = this.readAllQuizQuestion.bind(this);
  }

  public async readAllQuizQuestion(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const question = await this.readAllQuizQuestionUseCase.execute();

      if (this.readAllQuizQuestionUseCase.errors.length > 0) {
        const error = this.readAllQuizQuestionUseCase.errors[0];

        return res.status(error.errStatus).json({
          error: error.errMessage,
        });
      }

      return res.status(200).json({
        result: question,
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
