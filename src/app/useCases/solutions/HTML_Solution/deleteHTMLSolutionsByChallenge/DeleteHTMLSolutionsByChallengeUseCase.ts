import { IHTML_Solution } from '@entities/IHTML_Solution';
import { IError } from '@interfaces/IError';
import { Prisma } from '@prisma/client';
import { IHTML_SolutionRepository } from '@solutionsRep/html_solution/interfaces/IHTML_SolutionRepository';

export class DeleteHTMLSolutionsByChallengeUseCase {
  private _errors: IError[] = [];

  constructor(private htmlSolutionsRepository: IHTML_SolutionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    html_challenge_id,
  }: IHTML_Solution): Promise<Prisma.BatchPayload | void> {
    try {
      this.errors = [];

      const result =
        await this.htmlSolutionsRepository.deleteHTMLSolutionsByChallenge({
          html_challenge_id,
        });

      if (!result) {
        this.errors.push({
          errMessage:
            'Nenhuma solução deste desafio foi encontrada. Envie o ID de desafio correto para prosseguir ou tente novamente mais tarde!',
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
