import { IJS_Solution } from '@entities/IJS_Solution';
import { IError } from '@interfaces/IError';
import { IJS_SolutionRepository } from '@solutionsRep/js_solution/interfaces/IJS_SolutionRepository';

export class CreateJSSolutionUseCase {
  private _errors: IError[] = [];

  constructor(private jsSolutionsRepository: IJS_SolutionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    js_challenge_id,
    user_id,
    solution_submitted,
  }: IJS_Solution): Promise<IJS_Solution | void> {
    try {
      this.errors = [];

      const result = await this.jsSolutionsRepository.createJSSolution({
        js_challenge_id,
        user_id,
        solution_submitted,
      });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
