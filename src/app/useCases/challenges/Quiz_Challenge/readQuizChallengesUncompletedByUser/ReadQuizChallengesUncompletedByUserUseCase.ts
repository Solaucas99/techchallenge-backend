import { IQuiz_Challenge } from '@entities/IQuiz_Challenge';
import { IError } from '@interfaces/IError';
import { IQuiz_ChallengeRepository } from '@challengesRep/quiz_challenge/interfaces/IQuiz_ChallengeRepository';

export class ReadQuizChallengesUncompletedByUserUseCase {
  private _errors: IError[] = [];

  constructor(private quizChallengesRepository: IQuiz_ChallengeRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute(user_id: string): Promise<IQuiz_Challenge[] | void> {
    try {
      this.errors = [];

      const result =
        await this.quizChallengesRepository.readQuizChallengesUncompletedByUser(
          user_id,
        );

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
