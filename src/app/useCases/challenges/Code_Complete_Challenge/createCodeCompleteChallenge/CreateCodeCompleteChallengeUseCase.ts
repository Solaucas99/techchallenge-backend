import { ICode_Complete_Challenge } from '@entities/ICode_Complete_Challenge';
import { IError } from '@interfaces/IError';
import { ICode_Complete_ChallengeRepository } from '@challengesRep/code_complete_challenge/interfaces/ICode_Complete_ChallengeRepository';

export class CreateCodeCompleteChallengeUseCase {
  private _errors: IError[] = [];

  constructor(
    private codeCompleteChallengesRepository: ICode_Complete_ChallengeRepository,
  ) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    id,
    instruction,
    title,
    answer_1,
    answer_2,
    answer_3,
    challenge_archive,
    pontuation,
  }: ICode_Complete_Challenge): Promise<ICode_Complete_Challenge | void> {
    try {
      this.errors = [];

      const result =
        await this.codeCompleteChallengesRepository.createCodeCompleteChallenge(
          {
            id,
            instruction,
            title,
            answer_1,
            answer_2,
            answer_3,
            challenge_archive,
            pontuation: Number(pontuation),
          },
        );

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
