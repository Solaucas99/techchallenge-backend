import { Request, Response } from 'express';
import { DeleteJSSolutionsLikeByUserAndSolutionUseCase } from './DeleteJSSolutionsLikeByUserAndSolutionUseCase';

export class DeleteJSSolutionsLikeByUserAndSolutionController {
  constructor(
    private deleteJSSolutionsLikeByUserAndSolutionUseCase: DeleteJSSolutionsLikeByUserAndSolutionUseCase,
  ) {
    this.deleteJSSolutionsLikeByUserAndSolution =
      this.deleteJSSolutionsLikeByUserAndSolution.bind(this);
  }

  public async deleteJSSolutionsLikeByUserAndSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id, js_solution_id } = req.params;

      if (user_id && js_solution_id) {
        const solution =
          await this.deleteJSSolutionsLikeByUserAndSolutionUseCase.execute({
            js_solution_id,
            user_id,
          });

        if (
          this.deleteJSSolutionsLikeByUserAndSolutionUseCase.errors.length > 0
        ) {
          const error =
            this.deleteJSSolutionsLikeByUserAndSolutionUseCase.errors[0];

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
