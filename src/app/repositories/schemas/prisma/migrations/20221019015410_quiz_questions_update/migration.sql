/*
  Warnings:

  - You are about to drop the `quiz_asks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `quiz_asks` DROP FOREIGN KEY `quiz_asks_quiz_challenge_id_fkey`;

-- DropTable
DROP TABLE `quiz_asks`;

-- CreateTable
CREATE TABLE `quiz_questions` (
    `id` VARCHAR(191) NOT NULL,
    `question_text` VARCHAR(191) NOT NULL,
    `option_1` VARCHAR(191) NOT NULL,
    `option_2` VARCHAR(191) NOT NULL,
    `option_3` VARCHAR(191) NOT NULL,
    `option_4` VARCHAR(191) NOT NULL,
    `correct_answer` VARCHAR(191) NOT NULL,
    `question_score` VARCHAR(191) NOT NULL,
    `quiz_challenge_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `quiz_questions` ADD CONSTRAINT `quiz_questions_quiz_challenge_id_fkey` FOREIGN KEY (`quiz_challenge_id`) REFERENCES `quiz_challenges`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
