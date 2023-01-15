import { Request, Response } from 'express';
import { ReadJSSolutionsLikeByUserAndSolutionUseCase } from './ReadJSSolutionsLikeByUserAndSolutionUseCase';

export class ReadJSSolutionsLikeByUserAndSolutionController {
  constructor(
    private readJSSolutionsLikeByUserAndSolutionUseCase: ReadJSSolutionsLikeByUserAndSolutionUseCase,
  ) {
    this.readJSSolutionsLikeByUserAndSolution =
      this.readJSSolutionsLikeByUserAndSolution.bind(this);
  }

  public async readJSSolutionsLikeByUserAndSolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { user_id, js_solution_id } = req.params;

      if (user_id && js_solution_id) {
        const solution =
          await this.readJSSolutionsLikeByUserAndSolutionUseCase.execute({
            js_solution_id,
            user_id,
          });

        if (
          this.readJSSolutionsLikeByUserAndSolutionUseCase.errors.length > 0
        ) {
          const error =
            this.readJSSolutionsLikeByUserAndSolutionUseCase.errors[0];

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
