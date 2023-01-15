import { IRanking_Response } from '@entities/IRanking_Response';
import { IError } from '@interfaces/IError';
import { IRanking } from '@interfaces/IRanking';
import { IRankingRepository } from 'src/app/repositories/rankings/ranking/interfaces/IRankingRepository';

export class RankingUseCase {
  private _errors: IError[] = [];

  constructor(private rankingRepository: IRankingRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    quarter,
    ranking_type,
  }: IRanking): Promise<IRanking_Response[] | void> {
    try {
      this.errors = [];

      const ranking = await this.rankingRepository.readRanking({
        quarter,
        ranking_type,
      });

      if (!ranking) {
        this.errors.push({
          errMessage: 'Ranking não encontrado. Tente fazer login novamente!',
          errStatus: 404,
        });
        return;
      }

      return ranking;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
