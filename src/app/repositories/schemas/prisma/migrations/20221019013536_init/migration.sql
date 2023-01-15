-- CreateTable
CREATE TABLE `js_challenges` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `instruction` VARCHAR(191) NOT NULL,
    `test_archive` VARCHAR(191) NOT NULL,
    `pontuation` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `js_solutions` (
    `id` VARCHAR(191) NOT NULL,
    `solution_submitted` VARCHAR(191) NOT NULL,
    `likes` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `js_challenge_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `html_challenges` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `instruction` VARCHAR(191) NOT NULL,
    `test_archive` VARCHAR(191) NOT NULL,
    `html_archive` VARCHAR(191) NOT NULL,
    `pontuation` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `html_solutions` (
    `id` VARCHAR(191) NOT NULL,
    `solution_submitted` VARCHAR(191) NOT NULL,
    `likes` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `html_challenge_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `code_complete_challenges` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `instruction` VARCHAR(191) NOT NULL,
    `challenge_archive` VARCHAR(191) NOT NULL,
    `pontuation` VARCHAR(191) NOT NULL,
    `answer_1` VARCHAR(191) NOT NULL,
    `answer_2` VARCHAR(191) NOT NULL,
    `answer_3` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `code_complete_solutions` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `answer_1` VARCHAR(191) NOT NULL,
    `answer_2` VARCHAR(191) NOT NULL,
    `answer_3` VARCHAR(191) NOT NULL,
    `code_complete_challenge_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_challenges` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `instruction` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quiz_asks` (
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

-- CreateTable
CREATE TABLE `quiz_solutions` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `correct_answers_pontuation` VARCHAR(191) NOT NULL,
    `answer_1` INTEGER NOT NULL,
    `answer_2` INTEGER NOT NULL,
    `answer_3` INTEGER NOT NULL,
    `answer_4` INTEGER NOT NULL,
    `answer_5` INTEGER NOT NULL,
    `quiz_challenge_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `js_solutions_score` VARCHAR(191) NOT NULL,
    `html_solutions_score` VARCHAR(191) NOT NULL,
    `code_complete_score` VARCHAR(191) NOT NULL,
    `quiz_score` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `js_solutions` ADD CONSTRAINT `js_solutions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `js_solutions` ADD CONSTRAINT `js_solutions_js_challenge_id_fkey` FOREIGN KEY (`js_challenge_id`) REFERENCES `js_challenges`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `html_solutions` ADD CONSTRAINT `html_solutions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `html_solutions` ADD CONSTRAINT `html_solutions_html_challenge_id_fkey` FOREIGN KEY (`html_challenge_id`) REFERENCES `html_challenges`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `code_complete_solutions` ADD CONSTRAINT `code_complete_solutions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `code_complete_solutions` ADD CONSTRAINT `code_complete_solutions_code_complete_challenge_id_fkey` FOREIGN KEY (`code_complete_challenge_id`) REFERENCES `code_complete_challenges`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_asks` ADD CONSTRAINT `quiz_asks_quiz_challenge_id_fkey` FOREIGN KEY (`quiz_challenge_id`) REFERENCES `quiz_challenges`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_solutions` ADD CONSTRAINT `quiz_solutions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_solutions` ADD CONSTRAINT `quiz_solutions_quiz_challenge_id_fkey` FOREIGN KEY (`quiz_challenge_id`) REFERENCES `quiz_challenges`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
