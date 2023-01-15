import { IQuiz_Solution } from '@entities/IQuiz_Solution';
import { IError } from '@interfaces/IError';
import { Prisma } from '@prisma/client';
import { IQuiz_SolutionRepository } from '@solutionsRep/quiz_solution/interfaces/IQuiz_SolutionRepository';

export class DeleteQuizSolutionsByChallengeUseCase {
  private _errors: IError[] = [];

  constructor(private quizSolutionsRepository: IQuiz_SolutionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    quiz_challenge_id,
  }: IQuiz_Solution): Promise<Prisma.BatchPayload | void> {
    try {
      this.errors = [];

      const result =
        await this.quizSolutionsRepository.deleteQuizSolutionsByChallenge({
          quiz_challenge_id,
        });

      if (!result) {
        this.errors.push({
          errMessage:
            'Solução não encontrada. Envie o ID de usuário correto para prosseguir ou tente novamente mais tarde!',
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
