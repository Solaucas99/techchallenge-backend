import { IHTML_Solution_Like } from '@entities/IHTML_Solution_Like';
import { IError } from '@interfaces/IError';
import { IHTML_Solution_LikeRepository } from '@solutionsLikesRep/html_solution_like/interfaces/IHTML_Solution_LikeRepository';

export class CreateHTMLSolutionLikeUseCase {
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
    user_id,
  }: IHTML_Solution_Like): Promise<IHTML_Solution_Like | void> {
    try {
      this.errors = [];

      const result =
        await this.htmlSolutionsLikeRepository.createHTMLSolutionLike({
          html_solution_id,
          user_id,
        });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
