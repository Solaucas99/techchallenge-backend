import { ICode_Complete_Solution } from '@entities/ICode_Complete_Solution';
import { IError } from '@interfaces/IError';
import { ICode_Complete_SolutionRepository } from '@solutionsRep/code_complete_solution/interfaces/ICode_Complete_SolutionRepository';

export class ReadAllCodeCompleteSolutionUseCase {
  private _errors: IError[] = [];

  constructor(
    private codeCompleteSolutionsRepository: ICode_Complete_SolutionRepository,
  ) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute(): Promise<ICode_Complete_Solution[] | void> {
    try {
      this.errors = [];

      const result =
        await this.codeCompleteSolutionsRepository.readAllCode_CompleteSolution();

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
