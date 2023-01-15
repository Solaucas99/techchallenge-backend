/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `html_solutions` MODIFY `likes` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `js_solutions` MODIFY `likes` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `users` MODIFY `js_solutions_score` INTEGER NOT NULL DEFAULT 0,
    MODIFY `html_solutions_score` INTEGER NOT NULL DEFAULT 0,
    MODIFY `code_complete_score` INTEGER NOT NULL DEFAULT 0,
    MODIFY `quiz_score` INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);
