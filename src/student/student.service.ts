import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateStudentInput } from './student.input';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  private model = this.prisma.student;

  async createStudent(createStudentInput: CreateStudentInput) {
    const { firstName, lastName } = createStudentInput;
    const student = await this.model.create({ data: { firstName, lastName } });

    return student;
  }

  async listStudents() {
    return await this.model.findMany();
  }

  async getStudent(id: number) {
    const student = await this.model.findUnique({ where: { id } });

    return student;
  }
}
