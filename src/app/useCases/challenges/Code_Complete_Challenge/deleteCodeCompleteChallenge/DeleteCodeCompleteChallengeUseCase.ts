import { ICode_Complete_Challenge } from '@entities/ICode_Complete_Challenge';
import { IError } from '@interfaces/IError';
import { ICode_Complete_ChallengeRepository } from '@challengesRep/code_complete_challenge/interfaces/ICode_Complete_ChallengeRepository';

export class DeleteCodeCompleteChallengeUseCase {
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

      const challenge =
        await this.codeCompleteChallengesRepository.readCodeCompleteChallenge({
          id,
        });

      if (!challenge) {
        this.errors.push({
          errMessage:
            'Desafio não encontrado. Envie o ID correto para prosseguir com a remoção ou tente deletar novamente mais tarde!',
          errStatus: 404,
        });
        return;
      }

      const result =
        await this.codeCompleteChallengesRepository.deleteCodeCompleteChallenge(
          {
            id,
          },
        );

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
