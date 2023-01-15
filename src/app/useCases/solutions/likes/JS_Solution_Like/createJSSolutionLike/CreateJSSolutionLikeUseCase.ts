import { IJS_Solution_Like } from '@entities/IJS_Solution_Like';
import { IError } from '@interfaces/IError';
import { IJS_Solution_LikeRepository } from '@solutionsLikesRep/js_solution_like/interfaces/IJS_Solution_LikeRepository';

export class CreateJSSolutionLikeUseCase {
  private _errors: IError[] = [];

  constructor(private jsSolutionsLikeRepository: IJS_Solution_LikeRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    js_solution_id,
    user_id,
  }: IJS_Solution_Like): Promise<IJS_Solution_Like | void> {
    try {
      this.errors = [];

      const result = await this.jsSolutionsLikeRepository.createJSSolutionLike({
        js_solution_id,
        user_id,
      });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
