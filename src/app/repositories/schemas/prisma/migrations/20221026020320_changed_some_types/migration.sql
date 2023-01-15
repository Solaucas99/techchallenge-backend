/*
  Warnings:

  - You are about to alter the column `pontuation` on the `code_complete_challenges` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `pontuation` on the `html_challenges` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `pontuation` on the `js_challenges` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `correct_answer` on the `quiz_questions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `question_score` on the `quiz_questions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `correct_answers_pontuation` on the `quiz_solutions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `js_solutions_score` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `html_solutions_score` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `code_complete_score` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `quiz_score` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `code_complete_challenges` MODIFY `pontuation` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `html_challenges` MODIFY `pontuation` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `js_challenges` MODIFY `pontuation` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `quiz_questions` MODIFY `correct_answer` INTEGER NOT NULL,
    MODIFY `question_score` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `quiz_solutions` MODIFY `correct_answers_pontuation` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `js_solutions_score` INTEGER NOT NULL,
    MODIFY `html_solutions_score` INTEGER NOT NULL,
    MODIFY `code_complete_score` INTEGER NOT NULL,
    MODIFY `quiz_score` INTEGER NOT NULL;
