import { IHTML_Solution } from '@entities/IHTML_Solution';
import { IError } from '@interfaces/IError';
import { IHTML_SolutionRepository } from '@solutionsRep/html_solution/interfaces/IHTML_SolutionRepository';

export class ReadAllHTMLSolutionUseCase {
  private _errors: IError[] = [];

  constructor(private htmlSolutionsRepository: IHTML_SolutionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute(): Promise<IHTML_Solution[] | void> {
    try {
      this.errors = [];

      const result = await this.htmlSolutionsRepository.readAllHTMLSolution();

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
