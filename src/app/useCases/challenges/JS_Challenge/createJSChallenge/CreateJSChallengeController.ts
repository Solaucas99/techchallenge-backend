import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';
import { v4 as v4uuid } from 'uuid';
import dotenv from 'dotenv';
import { CreateJSChallengeUseCase } from './CreateJSChallengeUseCase';

export class CreateJSChallengeController {
  constructor(private createJSChallengeUseCase: CreateJSChallengeUseCase) {
    this.createJSChallenge = this.createJSChallenge.bind(this);
    dotenv.config();
  }

  public async createJSChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const id = v4uuid();

      // if (!req.files) {
      //   return res.status(400).json({
      //     errMessage: 'Erro inesperado! Nenhum arquivo foi enviado!',
      //   });
      // }

      // const test_archive = req.files && req.files['test_archive'][0];

      // if (!test_archive) {
      //   return res.status(400).json({
      //     errMessage: 'Erro inesperado! Nenhum arquivo foi enviado!',
      //   });
      // }

      if (!req.body.test_archive) {
        return res.status(400).json({
          errMessage: 'Erro inesperado! Nenhum arquivo de teste foi enviado!',
        });
      }

      if (!req.body.start_archive) {
        return res.status(400).json({
          errMessage: 'Erro inesperado! Nenhum arquivo de inicio foi enviado!',
        });
      }

      const testDirectory = path.join(
        __dirname,
        `../../../../assets/challenges/js/${id}/test`,
      );

      const startArchiveDirectory = path.join(
        __dirname,
        `../../../../assets/challenges/js/${id}/start`,
      );

      if (!fs.existsSync(testDirectory)) {
        fs.mkdirSync(testDirectory, { recursive: true });
      }

      if (!fs.existsSync(startArchiveDirectory)) {
        fs.mkdirSync(startArchiveDirectory, { recursive: true });
      }

      fs.writeFileSync(
        path.join(testDirectory, `/test.js`),
        req.body.test_archive,
      );

      fs.writeFileSync(
        path.join(startArchiveDirectory, `/start.js`),
        req.body.start_archive,
      );

      const challenge = await this.createJSChallengeUseCase.execute({
        ...req.body,
        id,
        test_archive: process.env.DOMAIN + `/challenges/js/${id}/test/test.js`,
        start_archive:
          process.env.DOMAIN + `/challenges/js/${id}/start/start.js`,
      });

      return res.status(200).json({
        result: challenge,
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
