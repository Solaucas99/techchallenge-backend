import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { UserLoginUseCase } from './UserLoginUseCase';

export class UserLoginController {
  constructor(private userLoginUseCase: UserLoginUseCase) {
    this.userLogin = this.userLogin.bind(this);
    dotenv.config();
  }

  public async userLogin(
    req: Request,
    res: Response,
  ): Promise<Response | void> {
    try {
      const user = await this.userLoginUseCase.execute(req.body);

      if (this.userLoginUseCase.errors.length > 0) {
        const error = this.userLoginUseCase.errors[0];

        return res.status(error.errStatus).json({
          error: error.errMessage,
        });
      }

      jwt.sign(
        {
          userId: user?.id,
          email: user?.email,
          username: user?.username,
          isAdmin: user?.is_admin,
        },
        process.env.JWT_KEY as string,
        { expiresIn: '7d' },
        (err, token) => {
          if (err) res.status(500).json({ error: 'Erro ao gerar o JWT' });
          res.header('X-Access-Token', token);

          return res.status(200).json({
            result: user,
          });
        },
      );
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
