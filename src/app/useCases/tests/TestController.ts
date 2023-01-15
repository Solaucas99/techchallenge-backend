import { Request, Response } from 'express';
import { TestUseCase } from './TestUseCase';

export class TestController {
  constructor(private testUseCase: TestUseCase) {
    this.test = this.test.bind(this);
  }

  public async test(req: Request, res: Response): Promise<Response> {
    try {
      const response = await this.testUseCase.execute(req.body);

      if (this.testUseCase.errors.length > 0) {
        const error = this.testUseCase.errors[0];

        return res.status(error.errStatus).json({
          error: error.errMessage,
        });
      }

      return res.status(200).json({ ...response });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
