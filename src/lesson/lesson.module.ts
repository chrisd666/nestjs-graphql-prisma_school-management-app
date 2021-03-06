import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  providers: [LessonResolver, LessonService, PrismaService],
})
export class LessonModule {}
