import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AssignStudentsToLessonInput {
  @Field()
  lessonId: number;

  @Field((type) => [Int])
  studentIds: number[];
}
