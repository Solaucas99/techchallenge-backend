import { IQuiz_Solution } from '@entities/IQuiz_Solution';
import { IError } from '@interfaces/IError';
import { IQuiz_SolutionRepository } from '@solutionsRep/quiz_solution/interfaces/IQuiz_SolutionRepository';

export class ReadAllQuizSolutionUseCase {
  private _errors: IError[] = [];

  constructor(private quizSolutionsRepository: IQuiz_SolutionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute(): Promise<IQuiz_Solution[] | void> {
    try {
      this.errors = [];

      const result = await this.quizSolutionsRepository.readAllQuizSolution();

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
