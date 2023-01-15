import { IHTML_Challenge } from '@entities/IHTML_Challenge';
import { IError } from '@interfaces/IError';
import { IHTML_ChallengeRepository } from '@challengesRep/html_challenge/interfaces/IHTML_ChallengeRepository';

export class CreateHTMLChallengeUseCase {
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
    instruction,
    pontuation,
    test_archive,
    html_archive,
    start_archive,
    title,
  }: IHTML_Challenge): Promise<IHTML_Challenge | void> {
    try {
      this.errors = [];

      const result = await this.htmlChallengesRepository.createHTMLChallenge({
        id,
        instruction,
        pontuation: Number(pontuation),
        test_archive,
        html_archive,
        start_archive,
        title,
      });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
