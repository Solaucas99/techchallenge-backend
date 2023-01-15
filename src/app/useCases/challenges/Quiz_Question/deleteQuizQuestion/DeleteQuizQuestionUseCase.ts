import { IQuiz_Question } from '@entities/IQuiz_Question';
import { IError } from '@interfaces/IError';
import { IQuiz_QuestionRepository } from '@challengesRep/quiz_question/interfaces/IQuiz_QuestionRepository';

export class DeleteQuizQuestionUseCase {
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

      const challenge = await this.quizQuestionsRepository.readQuizQuestion({
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

      const result = await this.quizQuestionsRepository.deleteQuizQuestion({
        id,
      });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
