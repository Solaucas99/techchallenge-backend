import { IQuiz_Challenge } from '@entities/IQuiz_Challenge';
import { IError } from '@interfaces/IError';
import { IQuiz_ChallengeRepository } from '@challengesRep/quiz_challenge/interfaces/IQuiz_ChallengeRepository';

export class CreateQuizChallengeUseCase {
  private _errors: IError[] = [];

  constructor(private quizChallengesRepository: IQuiz_ChallengeRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    instruction,
    title,
  }: IQuiz_Challenge): Promise<IQuiz_Challenge | void> {
    try {
      this.errors = [];

      const result = await this.quizChallengesRepository.createQuizChallenge({
        instruction,
        title,
      });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
