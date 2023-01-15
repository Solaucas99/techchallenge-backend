import { IHTML_Solution_Like } from '@entities/IHTML_Solution_Like';
import { Prisma } from '@prisma/client';

export interface IHTML_Solution_LikeRepository {
  readHTMLSolutionsLikeBySolution({
    html_solution_id,
  }: IHTML_Solution_Like): Promise<IHTML_Solution_Like[] | void>;

  readHTMLSolutionsLikeByUserAndSolution({
    user_id,
    html_solution_id,
  }: IHTML_Solution_Like): Promise<IHTML_Solution_Like[] | void>;

  deleteHTMLSolutionsLikeBySolution({
    html_solution_id,
  }: IHTML_Solution_Like): Promise<Prisma.BatchPayload | void>;

  deleteHTMLSolutionsLikeByUserAndSolution({
    user_id,
    html_solution_id,
  }: IHTML_Solution_Like): Promise<Prisma.BatchPayload | void>;

  createHTMLSolutionLike({
    user_id,
    html_solution_id,
  }: IHTML_Solution_Like): Promise<IHTML_Solution_Like | void>;
}
