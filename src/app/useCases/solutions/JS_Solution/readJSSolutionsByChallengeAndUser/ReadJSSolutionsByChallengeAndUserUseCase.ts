import { IJS_Solution } from '@entities/IJS_Solution';
import { IError } from '@interfaces/IError';
import { IJS_SolutionRepository } from '@solutionsRep/js_solution/interfaces/IJS_SolutionRepository';

export class ReadJSSolutionsByChallengeAndUserUseCase {
  private _errors: IError[] = [];

  constructor(private jsSolutionsRepository: IJS_SolutionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    user_id,
    js_challenge_id,
  }: IJS_Solution): Promise<IJS_Solution[] | void> {
    try {
      this.errors = [];

      const result =
        await this.jsSolutionsRepository.readJSSolutionsByChallengeAndUser({
          user_id,
          js_challenge_id,
        });

      if (!result) {
        this.errors.push({
          errMessage:
            'Nenhuma solução deste usuário foi encontrada. Envie o ID de usuário correto para prosseguir ou tente novamente mais tarde!',
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
