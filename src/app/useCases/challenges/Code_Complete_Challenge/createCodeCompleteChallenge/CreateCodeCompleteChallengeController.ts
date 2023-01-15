import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';
import { v4 as v4uuid } from 'uuid';
import { CreateCodeCompleteChallengeUseCase } from './CreateCodeCompleteChallengeUseCase';

export class CreateCodeCompleteChallengeController {
  constructor(
    private createCodeCompleteChallengeUseCase: CreateCodeCompleteChallengeUseCase,
  ) {
    this.createCodeCompleteChallenge =
      this.createCodeCompleteChallenge.bind(this);
  }

  public async createCodeCompleteChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const id = v4uuid();

      if (!req.body.challenge_archive) {
        return res.status(400).json({
          errMessage: 'Erro inesperado! Nenhum arquivo de inicio foi enviado!',
        });
      }

      const startArchiveDirectory = path.join(
        __dirname,
        `../../../../assets/challenges/code-complete/${id}/start`,
      );

      if (!fs.existsSync(startArchiveDirectory)) {
        fs.mkdirSync(startArchiveDirectory, { recursive: true });
      }

      fs.writeFileSync(
        path.join(startArchiveDirectory, `/start.js`),
        req.body.challenge_archive,
      );

      const challenge = await this.createCodeCompleteChallengeUseCase.execute({
        ...req.body,
        id,
        challenge_archive:
          process.env.DOMAIN + `/challenges/code-complete/${id}/start/start.js`,
      });

      return res.status(200).json({
        result: challenge,
      });
    } catch (err: any) {
      return res.status(400).json({ message: 'Unexpected Error' });
    }
  }
}
