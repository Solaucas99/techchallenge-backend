import { Request, Response } from 'express';
import dotenv from 'dotenv';

import { RankingUseCase } from './RankingUseCase';
import { IRanking } from '@interfaces/IRanking';

interface RequestParams {
  [key: string]: any;
}

interface ResponseBody {
  [key: string]: any;
}

interface RequestBody {
  [key: string]: any;
}

export class RankingController {
  constructor(private rankingUseCase: RankingUseCase) {
    this.ranking = this.ranking.bind(this);
    dotenv.config();
  }

  public async ranking(
    req: Request<RequestParams, ResponseBody, RequestBody, IRanking>,
    res: Response,
  ): Promise<Response | void> {
    try {
      const ranking = await this.rankingUseCase.execute(req.query);

      if (this.rankingUseCase.errors.length > 0) {
        const error = this.rankingUseCase.errors[0];

        return res.status(error.errStatus).json({
          error: error.errMessage,
        });
      }

      return res.status(200).json({
        result: ranking,
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
