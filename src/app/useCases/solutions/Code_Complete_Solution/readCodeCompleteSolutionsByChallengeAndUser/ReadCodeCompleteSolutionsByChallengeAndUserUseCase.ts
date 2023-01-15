import { ICode_Complete_Solution } from '@entities/ICode_Complete_Solution';
import { IError } from '@interfaces/IError';
import { ICode_Complete_SolutionRepository } from '@solutionsRep/code_complete_solution/interfaces/ICode_Complete_SolutionRepository';

export class ReadCodeCompleteSolutionsByChallengeAndUserUseCase {
  private _errors: IError[] = [];

  constructor(
    private codeCompleteSolutionsRepository: ICode_Complete_SolutionRepository,
  ) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    user_id,
    code_complete_challenge_id,
  }: ICode_Complete_Solution): Promise<ICode_Complete_Solution[] | void> {
    try {
      this.errors = [];

      const result =
        await this.codeCompleteSolutionsRepository.readCode_CompleteSolutionsByChallengeAndUser(
          {
            user_id,
            code_complete_challenge_id,
          },
        );

      if (!result) {
        this.errors.push({
          errMessage:
            'Solução não encontrada. Envie o ID de usuário ou ID de solução correto para prosseguir ou tente novamente mais tarde!',
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
