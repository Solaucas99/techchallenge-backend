-- AlterTable
ALTER TABLE `code_complete_challenges` MODIFY `instruction` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `html_challenges` MODIFY `instruction` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `js_challenges` MODIFY `instruction` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `quiz_challenges` MODIFY `instruction` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `quiz_questions` MODIFY `question_text` LONGTEXT NOT NULL,
    MODIFY `option_1` LONGTEXT NOT NULL,
    MODIFY `option_2` LONGTEXT NOT NULL,
    MODIFY `option_3` LONGTEXT NOT NULL,
    MODIFY `option_4` LONGTEXT NOT NULL;
