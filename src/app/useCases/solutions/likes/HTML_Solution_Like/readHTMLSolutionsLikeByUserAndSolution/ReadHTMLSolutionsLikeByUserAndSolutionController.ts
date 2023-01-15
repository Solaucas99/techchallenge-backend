import { Request, Response } from 'express';
import { ReadHTMLSolutionsLikeByUserAndSolutionUseCase } from './ReadHTMLSolutionsLikeByUserAndSolutionUseCase';

export class ReadHTMLSolutionsLikeByUserAndSolutionController {
  constructor(
    private readHTMLSolutionsLikeByUserAndSolutionUseCase: ReadHTMLSolutionsLikeByUserAndSolutionUseCase,
  ) {
    this.readHTMLSolutionsLikeByUserAndSolution =
      this.readHTMLSolutionsLikeByUserAndSolution.bind(this);
  }

  public async readHTMLSolutionsLikeByUserAndSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id, html_solution_id } = req.params;

      if (user_id && html_solution_id) {
        const solution =
          await this.readHTMLSolutionsLikeByUserAndSolutionUseCase.execute({
            html_solution_id,
            user_id,
          });

        if (
          this.readHTMLSolutionsLikeByUserAndSolutionUseCase.errors.length > 0
        ) {
          const error =
            this.readHTMLSolutionsLikeByUserAndSolutionUseCase.errors[0];

          return res.status(error.errStatus).json({
            error: error.errMessage,
          });
        }

        return res.status(200).json({
          result: solution,
        });
      }

      return res.status(404).json({
        error: 'Algum parametro ID (usuário ou solução) não enviada',
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
