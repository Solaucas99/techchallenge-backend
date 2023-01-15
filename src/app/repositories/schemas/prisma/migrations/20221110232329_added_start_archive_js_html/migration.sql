/*
  Warnings:

  - Added the required column `start_archive` to the `html_challenges` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_archive` to the `js_challenges` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `html_challenges` ADD COLUMN `start_archive` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `js_challenges` ADD COLUMN `start_archive` VARCHAR(191) NOT NULL;
