/*
  Warnings:

  - You are about to drop the column `code_complete_score` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `html_solutions_score` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `js_solutions_score` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `quiz_score` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `code_complete_score`,
    DROP COLUMN `html_solutions_score`,
    DROP COLUMN `js_solutions_score`,
    DROP COLUMN `quiz_score`;
