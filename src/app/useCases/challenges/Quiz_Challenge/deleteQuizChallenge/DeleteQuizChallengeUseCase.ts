import { IQuiz_Challenge } from '@entities/IQuiz_Challenge';
import { IError } from '@interfaces/IError';
import { IQuiz_ChallengeRepository } from '@challengesRep/quiz_challenge/interfaces/IQuiz_ChallengeRepository';

export class DeleteQuizChallengeUseCase {
  private _errors: IError[] = [];

  constructor(private quizChallengesRepository: IQuiz_ChallengeRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    id,
  }: IQuiz_Challenge): Promise<IQuiz_Challenge | void> {
    try {
      this.errors = [];

      const challenge = await this.quizChallengesRepository.readQuizChallenge({
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

      const result = await this.quizChallengesRepository.deleteQuizChallenge({
        id,
      });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
