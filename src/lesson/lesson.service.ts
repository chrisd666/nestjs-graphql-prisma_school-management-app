import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  private model = this.prisma.lesson;

  async createLesson(data: CreateLessonInput) {
    const lesson = await this.model.create({ data });

    return lesson;
  }

  async getLesson(id: number) {
    const lesson = await this.model.findUnique({
      where: { id },
      include: { students: true },
    });

    return lesson;
  }

  async getLessons() {
    return await this.model.findMany({ include: { students: true } });
  }

  async assignStudentsToLesson(lessonId: number, studentIds: number[]) {
    const studentList: Prisma.StudentWhereUniqueInput[] = [];
    studentIds.forEach((id) => studentList.push({ id }));

    await this.model.update({
      where: { id: lessonId },
      data: {
        students: {
          connect: studentList,
        },
      },
    });

    return await this.getLesson(lessonId);
  }
}
