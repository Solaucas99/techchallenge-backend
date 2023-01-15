import { IJS_Challenge } from '@entities/IJS_Challenge';
import { IError } from '@interfaces/IError';
import { IJS_ChallengeRepository } from '@challengesRep/js_challenge/interfaces/IJS_ChallengeRepository';

export class ReadJSChallengesUncompletedByUserUseCase {
  private _errors: IError[] = [];

  constructor(private jsChallengesRepository: IJS_ChallengeRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute(user_id: string): Promise<IJS_Challenge[] | void> {
    try {
      this.errors = [];

      const result =
        await this.jsChallengesRepository.readJSChallengesUncompletedByUser(
          user_id,
        );

      if (!result) {
        this.errors.push({
          errMessage:
            'Nenhum desafio foi encontrado na base de dados! Crie um desafio agora!',
          errStatus: 404,
        });
        return;
      }

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
