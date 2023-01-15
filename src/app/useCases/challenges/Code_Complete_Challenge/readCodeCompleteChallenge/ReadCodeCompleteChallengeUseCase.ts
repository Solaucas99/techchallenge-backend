import { ICode_Complete_Challenge } from '@entities/ICode_Complete_Challenge';
import { IError } from '@interfaces/IError';
import { ICode_Complete_ChallengeRepository } from '@challengesRep/code_complete_challenge/interfaces/ICode_Complete_ChallengeRepository';

export class ReadCodeCompleteChallengeUseCase {
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
  }: ICode_Complete_Challenge): Promise<ICode_Complete_Challenge | void> {
    try {
      this.errors = [];

      const result =
        await this.codeCompleteChallengesRepository.readCodeCompleteChallenge({
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

      delete result.answer_1;
      delete result.answer_2;
      delete result.answer_3;

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
