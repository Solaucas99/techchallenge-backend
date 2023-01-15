import { Request, Response } from 'express';
import { CreateQuizQuestionUseCase } from './CreateQuizQuestionUseCase';

export class CreateQuizQuestionController {
  constructor(private createQuizQuestionUseCase: CreateQuizQuestionUseCase) {
    this.createQuizQuestion = this.createQuizQuestion.bind(this);
  }

  public async createQuizQuestion(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const question = await this.createQuizQuestionUseCase.execute(req.body);

      return res.status(200).json({
        result: question,
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
