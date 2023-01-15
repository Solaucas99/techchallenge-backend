import { IRanking_Response } from '@entities/IRanking_Response';
import { IRanking } from '@interfaces/IRanking';

export interface IRankingRepository {
  readRanking({
    quarter,
    ranking_type,
  }: IRanking): Promise<IRanking_Response[] | void>;
}
