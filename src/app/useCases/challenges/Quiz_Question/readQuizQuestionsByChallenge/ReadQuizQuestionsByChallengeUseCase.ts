import { IQuiz_Question } from '@entities/IQuiz_Question';
import { IError } from '@interfaces/IError';
import { IQuiz_QuestionRepository } from '@challengesRep/quiz_question/interfaces/IQuiz_QuestionRepository';

export class ReadQuizQuestionsByChallengeUseCase {
  private _errors: IError[] = [];

  constructor(private quizQuestionsRepository: IQuiz_QuestionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    quiz_challenge_id,
  }: IQuiz_Question): Promise<IQuiz_Question[] | void> {
    try {
      this.errors = [];

      const result =
        await this.quizQuestionsRepository.readQuizQuestionsByChallenge({
          quiz_challenge_id,
        });

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
