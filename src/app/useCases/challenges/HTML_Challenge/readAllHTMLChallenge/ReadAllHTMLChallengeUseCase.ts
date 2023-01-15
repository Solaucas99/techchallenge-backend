import { IHTML_Challenge } from '@entities/IHTML_Challenge';
import { IError } from '@interfaces/IError';
import { IHTML_ChallengeRepository } from '@challengesRep/html_challenge/interfaces/IHTML_ChallengeRepository';

export class ReadAllHTMLChallengeUseCase {
  private _errors: IError[] = [];

  constructor(private htmlChallengesRepository: IHTML_ChallengeRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute(): Promise<IHTML_Challenge[] | void> {
    try {
      this.errors = [];

      const result = await this.htmlChallengesRepository.readAllHTMLChallenge();

      if (!result) {
        this.errors.push({
          errMessage:
            'Nenhum desafio foi encontrado na base de dados! Crie um desafio agora!',
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
