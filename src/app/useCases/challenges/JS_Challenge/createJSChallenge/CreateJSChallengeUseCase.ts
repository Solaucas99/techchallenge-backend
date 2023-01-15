import { IJS_Challenge } from '@entities/IJS_Challenge';
import { IError } from '@interfaces/IError';
import { IJS_ChallengeRepository } from '@challengesRep/js_challenge/interfaces/IJS_ChallengeRepository';

export class CreateJSChallengeUseCase {
  private _errors: IError[] = [];

  constructor(private jsChallengesRepository: IJS_ChallengeRepository) {}

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
    start_archive,
    title,
  }: IJS_Challenge): Promise<IJS_Challenge | void> {
    try {
      this.errors = [];

      const result = await this.jsChallengesRepository.createJSChallenge({
        id,
        instruction,
        pontuation: Number(pontuation),
        test_archive,
        start_archive,
        title,
      });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
