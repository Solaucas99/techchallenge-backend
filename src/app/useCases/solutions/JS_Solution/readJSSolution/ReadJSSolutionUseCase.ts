import { IJS_Solution } from '@entities/IJS_Solution';
import { IError } from '@interfaces/IError';
import { IJS_SolutionRepository } from '@solutionsRep/js_solution/interfaces/IJS_SolutionRepository';

export class ReadJSSolutionUseCase {
  private _errors: IError[] = [];

  constructor(private jsSolutionsRepository: IJS_SolutionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({ id }: IJS_Solution): Promise<IJS_Solution | void> {
    try {
      this.errors = [];

      const result = await this.jsSolutionsRepository.readJSSolution({
        id,
      });

      if (!result) {
        this.errors.push({
          errMessage:
            'Solução não encontrada. Envie o ID correto para prosseguir ou tente novamente mais tarde!',
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
