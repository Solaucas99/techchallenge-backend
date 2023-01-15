import { IQuiz_Question } from '@entities/IQuiz_Question';
import { IError } from '@interfaces/IError';
import { IQuiz_QuestionRepository } from '@challengesRep/quiz_question/interfaces/IQuiz_QuestionRepository';

export class ReadQuizQuestionUseCase {
  private _errors: IError[] = [];

  constructor(private quizQuestionsRepository: IQuiz_QuestionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({ id }: IQuiz_Question): Promise<IQuiz_Question | void> {
    try {
      this.errors = [];

      const result = await this.quizQuestionsRepository.readQuizQuestion({
        id,
      });

      if (!result) {
        this.errors.push({
          errMessage:
            'Desafio não encontrado. Envie o ID correto para prosseguir ou tente novamente mais tarde!',
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
