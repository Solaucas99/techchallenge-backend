import fs from 'fs-extra';
import path from 'path';

import { IError } from '@interfaces/IError';
import { ITest } from '@interfaces/ITest';
import { ITestProvider } from '@providers/tests/ITestProvider';
import { IJS_ChallengeRepository } from '@challengesRep/js_challenge/interfaces/IJS_ChallengeRepository';
import { IHTML_ChallengeRepository } from '@challengesRep/html_challenge/interfaces/IHTML_ChallengeRepository';

export class TestUseCase {
  private _errors: IError[] = [];

  constructor(
    private testProvider: ITestProvider,
    private jsChallengesRepository: IJS_ChallengeRepository,
    private htmlChallengesRepository: IHTML_ChallengeRepository,
  ) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    code,
    challenge_id,
    user_id,
    challenge_type,
  }: ITest): Promise<any> {
    try {
      this.errors = [];

      if (!code) {
        this.errors.push({
          errMessage: 'Nenhum código foi enviado para testes',
          errStatus: 400,
        });
        return;
      }

      if (!challenge_type) {
        this.errors.push({
          errMessage: 'O tipo de desafio é obrigatório',
          errStatus: 401,
        });
        return;
      }

      if (!user_id || !challenge_id) {
        this.errors.push({
          errMessage: 'Um erro inesperado ocorreu',
          errStatus: 400,
        });
        return;
      }

      if (challenge_type === 'js') {
        const challenge = await this.jsChallengesRepository.readJSChallenge({
          id: challenge_id,
        });

        if (!challenge) {
          this.errors.push({
            errMessage:
              'Desafio não encontrado. Envie o ID de desafio JS correto ou tente novamente mais tarde',
            errStatus: 400,
          });
          return;
        }
      }

      if (challenge_type === 'html') {
        const challenge = await this.htmlChallengesRepository.readHTMLChallenge(
          {
            id: challenge_id,
          },
        );

        if (!challenge) {
          this.errors.push({
            errMessage:
              'Desafio não encontrado. Envie o ID de desafio HTML correto ou tente novamente mais tarde',
            errStatus: 400,
          });
          return;
        }
      }

      const solutionsDirectory = path.join(
        __dirname,
        `../../assets/solutions/${challenge_type}/${user_id}/${challenge_id}/solution`,
      );

      const challengesDirectory = path.join(
        __dirname,
        `../../assets/challenges/${challenge_type}/${challenge_id}`,
      );

      if (challenge_type === 'html') {
        const htmlSource = path.join(challengesDirectory, `/html`);

        const htmlDest = path.join(solutionsDirectory, '..', `/html`);

        fs.copySync(htmlSource, htmlDest, { overwrite: true });
      }

      const testSource = path.join(challengesDirectory, `/test`);

      const testDest = path.join(solutionsDirectory, '..', `/test`);

      if (!fs.existsSync(solutionsDirectory)) {
        fs.mkdirSync(solutionsDirectory, { recursive: true });
      }

      fs.writeFileSync(path.join(solutionsDirectory, `/solution.js`), code);

      fs.copySync(testSource, testDest, { overwrite: true });

      const result = await this.testProvider.runTest(testDest);

      return { result };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
