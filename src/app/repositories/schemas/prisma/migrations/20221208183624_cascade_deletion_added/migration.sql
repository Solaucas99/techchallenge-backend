-- DropForeignKey
ALTER TABLE `code_complete_solutions` DROP FOREIGN KEY `code_complete_solutions_code_complete_challenge_id_fkey`;

-- DropForeignKey
ALTER TABLE `code_complete_solutions` DROP FOREIGN KEY `code_complete_solutions_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `html_solutions` DROP FOREIGN KEY `html_solutions_html_challenge_id_fkey`;

-- DropForeignKey
ALTER TABLE `html_solutions` DROP FOREIGN KEY `html_solutions_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `html_solutions_likes` DROP FOREIGN KEY `html_solutions_likes_html_solution_id_fkey`;

-- DropForeignKey
ALTER TABLE `html_solutions_likes` DROP FOREIGN KEY `html_solutions_likes_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `js_solutions` DROP FOREIGN KEY `js_solutions_js_challenge_id_fkey`;

-- DropForeignKey
ALTER TABLE `js_solutions` DROP FOREIGN KEY `js_solutions_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `js_solutions_likes` DROP FOREIGN KEY `js_solutions_likes_js_solution_id_fkey`;

-- DropForeignKey
ALTER TABLE `js_solutions_likes` DROP FOREIGN KEY `js_solutions_likes_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `quiz_questions` DROP FOREIGN KEY `quiz_questions_quiz_challenge_id_fkey`;

-- DropForeignKey
ALTER TABLE `quiz_solutions` DROP FOREIGN KEY `quiz_solutions_quiz_challenge_id_fkey`;

-- DropForeignKey
ALTER TABLE `quiz_solutions` DROP FOREIGN KEY `quiz_solutions_user_id_fkey`;

-- AddForeignKey
ALTER TABLE `js_solutions` ADD CONSTRAINT `js_solutions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `js_solutions` ADD CONSTRAINT `js_solutions_js_challenge_id_fkey` FOREIGN KEY (`js_challenge_id`) REFERENCES `js_challenges`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `js_solutions_likes` ADD CONSTRAINT `js_solutions_likes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `js_solutions_likes` ADD CONSTRAINT `js_solutions_likes_js_solution_id_fkey` FOREIGN KEY (`js_solution_id`) REFERENCES `js_solutions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `html_solutions` ADD CONSTRAINT `html_solutions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `html_solutions` ADD CONSTRAINT `html_solutions_html_challenge_id_fkey` FOREIGN KEY (`html_challenge_id`) REFERENCES `html_challenges`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `html_solutions_likes` ADD CONSTRAINT `html_solutions_likes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `html_solutions_likes` ADD CONSTRAINT `html_solutions_likes_html_solution_id_fkey` FOREIGN KEY (`html_solution_id`) REFERENCES `html_solutions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `code_complete_solutions` ADD CONSTRAINT `code_complete_solutions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `code_complete_solutions` ADD CONSTRAINT `code_complete_solutions_code_complete_challenge_id_fkey` FOREIGN KEY (`code_complete_challenge_id`) REFERENCES `code_complete_challenges`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_questions` ADD CONSTRAINT `quiz_questions_quiz_challenge_id_fkey` FOREIGN KEY (`quiz_challenge_id`) REFERENCES `quiz_challenges`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_solutions` ADD CONSTRAINT `quiz_solutions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `quiz_solutions` ADD CONSTRAINT `quiz_solutions_quiz_challenge_id_fkey` FOREIGN KEY (`quiz_challenge_id`) REFERENCES `quiz_challenges`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
