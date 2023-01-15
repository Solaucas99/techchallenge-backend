import { Request, Response } from 'express';
import { DeleteJSSolutionsLikeBySolutionUseCase } from './DeleteJSSolutionsLikeBySolutionUseCase';

export class DeleteJSSolutionsLikeBySolutionController {
  constructor(
    private deleteJSSolutionsLikeBySolutionUseCase: DeleteJSSolutionsLikeBySolutionUseCase,
  ) {
    this.deleteJSSolutionsLikeBySolution =
      this.deleteJSSolutionsLikeBySolution.bind(this);
  }

  public async deleteJSSolutionsLikeBySolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { js_solution_id } = req.params;

      if (js_solution_id) {
        const solution =
          await this.deleteJSSolutionsLikeBySolutionUseCase.execute({
            js_solution_id,
          });

        if (this.deleteJSSolutionsLikeBySolutionUseCase.errors.length > 0) {
          const error = this.deleteJSSolutionsLikeBySolutionUseCase.errors[0];

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
