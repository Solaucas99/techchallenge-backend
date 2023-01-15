import { Request, Response } from 'express';
import { DeleteHTMLSolutionsLikeBySolutionUseCase } from './DeleteHTMLSolutionsLikeBySolutionUseCase';

export class DeleteHTMLSolutionsLikeBySolutionController {
  constructor(
    private deleteHTMLSolutionsLikeBySolutionUseCase: DeleteHTMLSolutionsLikeBySolutionUseCase,
  ) {
    this.deleteHTMLSolutionsLikeBySolution =
      this.deleteHTMLSolutionsLikeBySolution.bind(this);
  }

  public async deleteHTMLSolutionsLikeBySolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { html_solution_id } = req.params;

      if (html_solution_id) {
        const solution =
          await this.deleteHTMLSolutionsLikeBySolutionUseCase.execute({
            html_solution_id,
          });

        if (this.deleteHTMLSolutionsLikeBySolutionUseCase.errors.length > 0) {
          const error = this.deleteHTMLSolutionsLikeBySolutionUseCase.errors[0];

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
