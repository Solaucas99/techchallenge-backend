import { IHTML_Solution } from '@entities/IHTML_Solution';
import { IError } from '@interfaces/IError';
import { IHTML_SolutionRepository } from '@solutionsRep/html_solution/interfaces/IHTML_SolutionRepository';

export class CreateHTMLSolutionUseCase {
  private _errors: IError[] = [];

  constructor(private htmlSolutionsRepository: IHTML_SolutionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    html_challenge_id,
    user_id,
    solution_submitted,
  }: IHTML_Solution): Promise<IHTML_Solution | void> {
    try {
      this.errors = [];

      const result = await this.htmlSolutionsRepository.createHTMLSolution({
        html_challenge_id,
        user_id,
        solution_submitted,
      });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
