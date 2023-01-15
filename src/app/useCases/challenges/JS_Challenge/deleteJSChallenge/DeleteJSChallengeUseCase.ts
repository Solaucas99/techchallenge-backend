import { IJS_Challenge } from '@entities/IJS_Challenge';
import { IError } from '@interfaces/IError';
import { IJS_ChallengeRepository } from '@challengesRep/js_challenge/interfaces/IJS_ChallengeRepository';

export class DeleteJSChallengeUseCase {
  private _errors: IError[] = [];

  constructor(private jsChallengesRepository: IJS_ChallengeRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({ id }: IJS_Challenge): Promise<IJS_Challenge | void> {
    try {
      this.errors = [];

      const challenge = await this.jsChallengesRepository.readJSChallenge({
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

      const result = await this.jsChallengesRepository.deleteJSChallenge({
        id,
      });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
