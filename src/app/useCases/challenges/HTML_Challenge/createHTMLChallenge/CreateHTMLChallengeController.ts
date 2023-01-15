import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs-extra';
import { v4 as v4uuid } from 'uuid';
import { CreateHTMLChallengeUseCase } from './CreateHTMLChallengeUseCase';

export class CreateHTMLChallengeController {
  constructor(private createHTMLChallengeUseCase: CreateHTMLChallengeUseCase) {
    this.createHTMLChallenge = this.createHTMLChallenge.bind(this);
  }

  public async createHTMLChallenge(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const id = v4uuid();

      if (!req.body.test_archive) {
        return res.status(400).json({
          errMessage: 'Erro inesperado! Nenhum arquivo de teste foi enviado!',
        });
      }

      if (!req.body.html_archive) {
        return res.status(400).json({
          errMessage: 'Erro inesperado! Nenhum arquivo de HTML foi enviado!',
        });
      }

      if (!req.body.start_archive) {
        return res.status(400).json({
          errMessage: 'Erro inesperado! Nenhum arquivo de inicio foi enviado!',
        });
      }

      const testDirectory = path.join(
        __dirname,
        `../../../../assets/challenges/html/${id}/test`,
      );

      const htmlDirectory = path.join(
        __dirname,
        `../../../../assets/challenges/html/${id}/html`,
      );

      const startArchiveDirectory = path.join(
        __dirname,
        `../../../../assets/challenges/html/${id}/start`,
      );

      if (!fs.existsSync(testDirectory)) {
        fs.mkdirSync(testDirectory, { recursive: true });
      }

      if (!fs.existsSync(htmlDirectory)) {
        fs.mkdirSync(htmlDirectory, { recursive: true });
      }

      if (!fs.existsSync(startArchiveDirectory)) {
        fs.mkdirSync(startArchiveDirectory, { recursive: true });
      }

      fs.writeFileSync(
        path.join(testDirectory, `/test.js`),
        req.body.test_archive,
      );

      fs.writeFileSync(
        path.join(htmlDirectory, `/index.html`),
        req.body.html_archive,
      );

      fs.writeFileSync(
        path.join(startArchiveDirectory, `/start.js`),
        req.body.start_archive,
      );

      const challenge = await this.createHTMLChallengeUseCase.execute({
        ...req.body,
        id,
        test_archive:
          process.env.DOMAIN + `/challenges/html/${id}/test/test.js`,
        html_archive:
          process.env.DOMAIN + `/challenges/html/${id}/html/index.html`,
        start_archive:
          process.env.DOMAIN + `/challenges/html/${id}/start/start.js`,
      });

      return res.status(200).json({
        result: challenge,
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
