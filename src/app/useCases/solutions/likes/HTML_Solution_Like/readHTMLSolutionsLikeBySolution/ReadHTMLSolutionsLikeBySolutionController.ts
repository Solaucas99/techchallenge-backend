import { Request, Response } from 'express';
import { ReadHTMLSolutionsLikeBySolutionUseCase } from './ReadHTMLSolutionsLikeBySolutionUseCase';

export class ReadHTMLSolutionsLikeBySolutionController {
  constructor(
    private readHTMLSolutionsLikeBySolutionUseCase: ReadHTMLSolutionsLikeBySolutionUseCase,
  ) {
    this.readHTMLSolutionsLikeBySolution =
      this.readHTMLSolutionsLikeBySolution.bind(this);
  }

  public async readHTMLSolutionsLikeBySolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { html_solution_id } = req.params;

      if (html_solution_id) {
        const solution =
          await this.readHTMLSolutionsLikeBySolutionUseCase.execute({
            html_solution_id,
          });

        if (this.readHTMLSolutionsLikeBySolutionUseCase.errors.length > 0) {
          const error = this.readHTMLSolutionsLikeBySolutionUseCase.errors[0];

          return res.status(error.errStatus).json({
            error: error.errMessage,
          });
        }

        return res.status(200).json({
          result: solution,
        });
      }

      return res.status(404).json({
        error: 'Parametro ID não enviado',
      });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
}
