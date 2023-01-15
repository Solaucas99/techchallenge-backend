import { ICode_Complete_ChallengeRepository } from '@challengesRep/code_complete_challenge/interfaces/ICode_Complete_ChallengeRepository';
import { ICode_Complete_Solution } from '@entities/ICode_Complete_Solution';
import { IError } from '@interfaces/IError';
import { ICode_Complete_SolutionRepository } from '@solutionsRep/code_complete_solution/interfaces/ICode_Complete_SolutionRepository';

export class CreateCodeCompleteSolutionUseCase {
  private _errors: IError[] = [];

  constructor(
    private codeCompleteSolutionsRepository: ICode_Complete_SolutionRepository,
    private codeCompleteChallengesRepository: ICode_Complete_ChallengeRepository,
  ) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    answer_1,
    answer_2,
    answer_3,
    code_complete_challenge_id,
    user_id,
  }: ICode_Complete_Solution): Promise<ICode_Complete_Solution | void> {
    try {
      this.errors = [];

      const challenge =
        await this.codeCompleteChallengesRepository.readCodeCompleteChallenge({
          id: code_complete_challenge_id,
        });

      if (!challenge) {
        this.errors.push({
          errStatus: 404,
          errMessage:
            'Erro ao procurar o desafio de Code Complete. Tente novamente mais tarde!',
        });
        return;
      }

      if (challenge.answer_1 !== answer_1) {
        this.errors.push({
          errStatus: 400,
          errMessage: 'Resposta 1 está incorreta. Tente novamente.',
        });
        return;
      }

      if (challenge.answer_2 !== answer_2) {
        this.errors.push({
          errStatus: 400,
          errMessage: 'Resposta 2 está incorreta. Tente novamente.',
        });
        return;
      }

      if (challenge.answer_3 !== answer_3) {
        this.errors.push({
          errStatus: 400,
          errMessage: 'Resposta 3 está incorreta. Tente novamente.',
        });
        return;
      }

      const result =
        await this.codeCompleteSolutionsRepository.createCode_CompleteSolution({
          answer_1,
          answer_2,
          answer_3,
          code_complete_challenge_id,
          user_id,
        });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
