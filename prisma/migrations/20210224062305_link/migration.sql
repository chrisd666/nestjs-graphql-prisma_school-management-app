-- AlterTable
ALTER TABLE `Student` ADD COLUMN     `lessonId` INTEGER;

-- AddForeignKey
ALTER TABLE `Student` ADD FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
