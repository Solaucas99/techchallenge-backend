import { IQuiz_QuestionRepository } from '@challengesRep/quiz_question/interfaces/IQuiz_QuestionRepository';
import { IQuiz_Solution } from '@entities/IQuiz_Solution';
import { IError } from '@interfaces/IError';
import { IQuiz_SolutionRepository } from '@solutionsRep/quiz_solution/interfaces/IQuiz_SolutionRepository';

type Answers = {
  answer_1: {
    selected: string;
    question_id: string;
  };

  answer_2: {
    selected: string;
    question_id: string;
  };

  answer_3: {
    selected: string;
    question_id: string;
  };

  answer_4: {
    selected: string;
    question_id: string;
  };

  answer_5: {
    selected: string;
    question_id: string;
  };
};

export class CreateQuizSolutionUseCase {
  private _errors: IError[] = [];

  constructor(
    private quizSolutionsRepository: IQuiz_SolutionRepository,
    private quizQuestionsRepository: IQuiz_QuestionRepository,
  ) {}

  public get errors(): IError[] {
    return this._errors;
  }

  public set errors(value: IError[]) {
    this._errors = value;
  }

  public async execute({
    answer_1,
    answer_2,
    answer_3,
    answer_4,
    answer_5,
    quiz_challenge_id,
    user_id,
  }: IQuiz_Solution & Answers): Promise<IQuiz_Solution | void> {
    try {
      this.errors = [];

      const answers = [answer_1, answer_2, answer_3, answer_4, answer_5];

      const answers_pontuation = await Promise.all(
        answers.map(async (answer) => {
          let answer_pontuation = 0;

          const question = await this.quizQuestionsRepository.readQuizQuestion({
            id: answer.question_id,
          });

          if (!question) {
            this.errors.push({
              errStatus: 404,
              errMessage:
                'Erro ao procurar as questões. Tente novamente mais tarde!',
            });
          }

          if (question && question.correct_answer === Number(answer.selected)) {
            answer_pontuation += question.question_score as number;
          }

          return answer_pontuation;
        }),
      );

      const correct_answers_pontuation = answers_pontuation.reduce(
        (acc, value) => acc + value,
        0,
      );

      const result = await this.quizSolutionsRepository.createQuizSolution({
        answer_1: Number(answer_1.selected),
        answer_2: Number(answer_2.selected),
        answer_3: Number(answer_3.selected),
        answer_4: Number(answer_4.selected),
        answer_5: Number(answer_5.selected),
        correct_answers_pontuation,
        quiz_challenge_id,
        user_id,
      });

      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
