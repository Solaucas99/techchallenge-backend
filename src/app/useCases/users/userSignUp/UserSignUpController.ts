import { Request, Response } from 'express';
import { UserSignUpUseCase } from './UserSignUpUseCase';

export class UserSignUpController {
  constructor(private userSignUpUseCase: UserSignUpUseCase) {
    this.userSignUp = this.userSignUp.bind(this);
  }

  public async userSignUp(req: Request, res: Response): Promise<Response> {
    try {
      const response = await this.userSignUpUseCase.execute(req.body);

      if (this.userSignUpUseCase.errors.length > 0) {
        const error = this.userSignUpUseCase.errors[0];

        return res.status(error.errStatus).json({
          error: error.errMessage,
        });
      }

      return res.status(200).json({
        result: response,
      });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
}
