import { IHTML_Solution } from '@entities/IHTML_Solution';
import { IError } from '@interfaces/IError';
import { IHTML_SolutionRepository } from '@solutionsRep/html_solution/interfaces/IHTML_SolutionRepository';

export class ReadHTMLSolutionsByUserUseCase {
  private _errors: IError[] = [];

  constructor(private htmlSolutionsRepository: IHTML_SolutionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    user_id,
  }: IHTML_Solution): Promise<IHTML_Solution[] | void> {
    try {
      this.errors = [];

      const result = await this.htmlSolutionsRepository.readHTMLSolutionsByUser(
        {
          user_id,
        },
      );

      if (!result) {
        this.errors.push({
          errMessage:
            'Nenhuma solução deste usuário foi encontrata. Envie o ID de usuário correto para prosseguir ou tente novamente mais tarde!',
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
