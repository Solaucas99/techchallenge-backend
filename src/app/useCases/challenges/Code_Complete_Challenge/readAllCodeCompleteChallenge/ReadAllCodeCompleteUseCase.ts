import { ICode_Complete_Challenge } from '@entities/ICode_Complete_Challenge';
import { IError } from '@interfaces/IError';
import { ICode_Complete_ChallengeRepository } from '@challengesRep/code_complete_challenge/interfaces/ICode_Complete_ChallengeRepository';

export class ReadAllCodeCompleteChallengeUseCase {
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

  public async execute(): Promise<ICode_Complete_Challenge[] | void> {
    try {
      this.errors = [];

      const result =
        await this.codeCompleteChallengesRepository.readAllCodeCompleteChallenge();

      if (!result) {
        this.errors.push({
          errMessage:
            'Nenhum desafio foi encontrado na base de dados! Crie um desafio agora!',
          errStatus: 404,
        });
        return;
      }

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
