import bcrypt from 'bcrypt';
import { IUser } from '@entities/IUser';
import { IError } from '@interfaces/IError';
import { IUserRepository } from '@usersRep/user/interfaces/IUserRepository';

export class UserSignUpUseCase {
  private _errors: IError[] = [];

  constructor(private userRepository: IUserRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    password,
    username,
    email,
  }: IUser): Promise<IUser | void> {
    try {
      this.errors = [];

      if (!username || !email || !password) {
        this.errors.push({
          errMessage:
            'Para realizar seu cadastro, todos os campos devem ser preenchidos',
          errStatus: 400,
        });
        return;
      }

      const hasNumbersAndLetters = function (str) {
        const regex = /(?:[A-Za-z].*?\d|\d.*?[A-Za-z])/;
        return !!str.match(regex);
      };

      if (password.length < 8 || !hasNumbersAndLetters(password)) {
        this.errors.push({
          errMessage:
            'A sua senha deve ter no mínimo 8 caracteres e também ter números e letras',
          errStatus: 400,
        });
        return;
      }

      const validateEmail = function (email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
      };

      if (!validateEmail(email)) {
        this.errors.push({
          errMessage:
            'O E-mail está num formato incorreto. Por favor, tente novamente',
          errStatus: 400,
        });
        return;
      }

      const findUserMail = await this.userRepository.readUserByEmail({
        email,
      });

      if (findUserMail) {
        this.errors.push({
          errMessage:
            'Esse e-mail já foi cadastrado anteriormente. Favor realizar o cadastro com um e-mail diferente',
          errStatus: 401,
        });
        return;
      }

      const findUserUsername = await this.userRepository.readUserByUsername({
        username,
      });

      if (findUserUsername) {
        this.errors.push({
          errMessage:
            'Esse username já foi cadastrado anteriormente. Favor realizar o cadastro com um username diferente',
          errStatus: 401,
        });
        return;
      }

      const hashedPassword = bcrypt.hashSync(password, 10);

      const user = await this.userRepository.createUser({
        password: hashedPassword,
        username,
        email,
      });

      if (!user) {
        this.errors.push({
          errMessage:
            'Ocorreu um erro ao criar o usuário. Tente novamente mais tarde',
          errStatus: 400,
        });
        return;
      }

      return user;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
