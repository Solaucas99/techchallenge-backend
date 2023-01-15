import { IJS_Solution_Like } from '@entities/IJS_Solution_Like';
import { IError } from '@interfaces/IError';
import { Prisma } from '@prisma/client';
import { IJS_Solution_LikeRepository } from '@solutionsLikesRep/js_solution_like/interfaces/IJS_Solution_LikeRepository';

export class DeleteJSSolutionsLikeBySolutionUseCase {
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
  }: IJS_Solution_Like): Promise<Prisma.BatchPayload | void> {
    try {
      this.errors = [];

      const result =
        await this.jsSolutionsLikeRepository.deleteJSSolutionsLikeBySolution({
          js_solution_id,
        });

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
