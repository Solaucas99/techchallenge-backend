import { IHTML_Challenge } from '@entities/IHTML_Challenge';
import { IError } from '@interfaces/IError';
import { IHTML_ChallengeRepository } from '@challengesRep/html_challenge/interfaces/IHTML_ChallengeRepository';

export class ReadHTMLChallengeUseCase {
  private _errors: IError[] = [];

  constructor(private htmlChallengesRepository: IHTML_ChallengeRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    id,
  }: IHTML_Challenge): Promise<IHTML_Challenge | void> {
    try {
      this.errors = [];

      const result = await this.htmlChallengesRepository.readHTMLChallenge({
        id,
      });

      if (!result) {
        this.errors.push({
          errMessage:
            'Desafio não encontrado. Envie o ID correto para prosseguir ou tente novamente mais tarde!',
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
