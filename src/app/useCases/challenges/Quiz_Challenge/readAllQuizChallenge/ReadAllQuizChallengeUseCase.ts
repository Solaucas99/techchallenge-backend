import { IQuiz_Challenge } from '@entities/IQuiz_Challenge';
import { IError } from '@interfaces/IError';
import { IQuiz_ChallengeRepository } from '@challengesRep/quiz_challenge/interfaces/IQuiz_ChallengeRepository';

export class ReadAllQuizChallengeUseCase {
  private _errors: IError[] = [];

  constructor(private quizChallengesRepository: IQuiz_ChallengeRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute(): Promise<IQuiz_Challenge[] | void> {
    try {
      this.errors = [];

      const result = await this.quizChallengesRepository.readAllQuizChallenge();

      if (!result) {
        this.errors.push({
          errMessage:
            'Nenhum desafio foi encontrado na base de dados! Crie um desafio agora!',
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
