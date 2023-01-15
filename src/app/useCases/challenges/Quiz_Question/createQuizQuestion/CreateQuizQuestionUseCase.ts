import { IQuiz_Question } from '@entities/IQuiz_Question';
import { IError } from '@interfaces/IError';
import { IQuiz_QuestionRepository } from '@challengesRep/quiz_question/interfaces/IQuiz_QuestionRepository';

export class CreateQuizQuestionUseCase {
  private _errors: IError[] = [];

  constructor(private quizQuestionsRepository: IQuiz_QuestionRepository) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    correct_answer,
    option_1,
    option_2,
    option_3,
    option_4,
    question_score,
    question_text,
    quiz_challenge_id,
  }: IQuiz_Question): Promise<IQuiz_Question | void> {
    try {
      this.errors = [];

      const result = await this.quizQuestionsRepository.createQuizQuestion({
        correct_answer: Number(correct_answer),
        option_1,
        option_2,
        option_3,
        option_4,
        question_score,
        question_text,
        quiz_challenge_id,
      });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
