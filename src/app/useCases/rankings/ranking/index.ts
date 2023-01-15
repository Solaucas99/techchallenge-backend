import { RankingRepository } from '@rankingsRep/ranking/implementations/RankingRepository';
import { RankingController } from './RankingController';
import { RankingUseCase } from './RankingUseCase';

const repo = new RankingRepository();
const useCase = new RankingUseCase(repo);
const rankingController = new RankingController(useCase);

export { rankingController };
