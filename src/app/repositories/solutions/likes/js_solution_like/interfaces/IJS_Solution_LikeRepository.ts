import { IJS_Solution_Like } from '@entities/IJS_Solution_Like';
import { Prisma } from '@prisma/client';

export interface IJS_Solution_LikeRepository {
  readJSSolutionsLikeBySolution({
    js_solution_id,
  }: IJS_Solution_Like): Promise<IJS_Solution_Like[] | void>;

  readJSSolutionsLikeByUserAndSolution({
    user_id,
    js_solution_id,
  }: IJS_Solution_Like): Promise<IJS_Solution_Like[] | void>;

  deleteJSSolutionsLikeBySolution({
    js_solution_id,
  }: IJS_Solution_Like): Promise<Prisma.BatchPayload | void>;

  deleteJSSolutionsLikeByUserAndSolution({
    user_id,
    js_solution_id,
  }: IJS_Solution_Like): Promise<Prisma.BatchPayload | void>;

  createJSSolutionLike({
    user_id,
    js_solution_id,
  }: IJS_Solution_Like): Promise<IJS_Solution_Like | void>;
}
