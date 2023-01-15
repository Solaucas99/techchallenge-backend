import bcrypt from 'bcrypt';
import { IUser } from '@entities/IUser';
import { IError } from '@interfaces/IError';
import { IUserRepository } from '@usersRep/user/interfaces/IUserRepository';

export class UserLoginUseCase {
  private _errors: IError[] = [];

  constructor(private userRepository: IUserRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({ password, username }: IUser): Promise<IUser | void> {
    try {
      this.errors = [];

      if (!password || !username) {
        this.errors.push({
          errMessage:
            'Usuário ou senha não enviados, favor enviar todos os dados',
          errStatus: 401,
        });
        return;
      }

      const user = await this.userRepository.readUserByUsername({
        username,
      });

      if (!user) {
        this.errors.push({
          errMessage: 'Usuário não encontrado. Tente fazer login novamente!',
          errStatus: 404,
        });
        return;
      }

      const passwordCheck = bcrypt.compareSync(
        password,
        user.password as string,
      );

      if (!passwordCheck) {
        this.errors.push({
          errMessage: 'Senha inválida. Tente fazer login novamente!',
          errStatus: 401,
        });
        return;
      }

      delete user.password;

      return user;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
