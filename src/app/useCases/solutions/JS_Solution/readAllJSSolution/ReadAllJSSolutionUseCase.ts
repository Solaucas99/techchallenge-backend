import { IJS_Solution } from '@entities/IJS_Solution';
import { IError } from '@interfaces/IError';
import { IJS_SolutionRepository } from '@solutionsRep/js_solution/interfaces/IJS_SolutionRepository';

export class ReadAllJSSolutionUseCase {
  private _errors: IError[] = [];

  constructor(private jsSolutionsRepository: IJS_SolutionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute(): Promise<IJS_Solution[] | void> {
    try {
      this.errors = [];

      const result = await this.jsSolutionsRepository.readAllJSSolution();

      if (Array.isArray(result) && result.length === 0) {
        this.errors.push({
          errMessage: 'Nenhuma solução foi encontrada na base de dados!',
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
