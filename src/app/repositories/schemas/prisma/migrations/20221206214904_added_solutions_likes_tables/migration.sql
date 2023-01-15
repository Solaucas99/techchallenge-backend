/*
  Warnings:

  - You are about to drop the column `likes` on the `html_solutions` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `js_solutions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `html_solutions` DROP COLUMN `likes`;

-- AlterTable
ALTER TABLE `js_solutions` DROP COLUMN `likes`;

-- CreateTable
CREATE TABLE `js_solutions_likes` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_id` VARCHAR(191) NOT NULL,
    `js_solution_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `html_solutions_likes` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_id` VARCHAR(191) NOT NULL,
    `html_solution_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `js_solutions_likes` ADD CONSTRAINT `js_solutions_likes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `js_solutions_likes` ADD CONSTRAINT `js_solutions_likes_js_solution_id_fkey` FOREIGN KEY (`js_solution_id`) REFERENCES `js_solutions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `html_solutions_likes` ADD CONSTRAINT `html_solutions_likes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `html_solutions_likes` ADD CONSTRAINT `html_solutions_likes_html_solution_id_fkey` FOREIGN KEY (`html_solution_id`) REFERENCES `html_solutions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
