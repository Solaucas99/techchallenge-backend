import { Request, Response } from 'express';
import { ReadJSSolutionsLikeBySolutionUseCase } from './ReadJSSolutionsLikeBySolutionUseCase';

export class ReadJSSolutionsLikeBySolutionController {
  constructor(
    private readJSSolutionsLikeBySolutionUseCase: ReadJSSolutionsLikeBySolutionUseCase,
  ) {
    this.readJSSolutionsLikeBySolution =
      this.readJSSolutionsLikeBySolution.bind(this);
  }

  public async readJSSolutionsLikeBySolution(
    req: Request,
    res: Response,
  ): Promise<Response> {
    try {
      const { js_solution_id } = req.params;

      if (js_solution_id) {
        const solution =
          await this.readJSSolutionsLikeBySolutionUseCase.execute({
            js_solution_id,
          });

        if (this.readJSSolutionsLikeBySolutionUseCase.errors.length > 0) {
          const error = this.readJSSolutionsLikeBySolutionUseCase.errors[0];

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
