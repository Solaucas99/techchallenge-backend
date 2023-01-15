import { IHTML_Solution_Like } from '@entities/IHTML_Solution_Like';
import { IError } from '@interfaces/IError';
import { Prisma } from '@prisma/client';
import { IHTML_Solution_LikeRepository } from '@solutionsLikesRep/html_solution_like/interfaces/IHTML_Solution_LikeRepository';

export class DeleteHTMLSolutionsLikeBySolutionUseCase {
  private _errors: IError[] = [];

  constructor(
    private htmlSolutionsLikeRepository: IHTML_Solution_LikeRepository,
  ) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    html_solution_id,
  }: IHTML_Solution_Like): Promise<Prisma.BatchPayload | void> {
    try {
      this.errors = [];

      const result =
        await this.htmlSolutionsLikeRepository.deleteHTMLSolutionsLikeBySolution(
          {
            html_solution_id,
          },
        );

      if (!result) {
        this.errors.push({
          errMessage:
            'Nenhum like foi encontrado para essa solução. Tente novamente mais tarde!',
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
