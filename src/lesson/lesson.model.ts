import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Lesson {

    @Field(() => ID, {
            nullable: false,
        })
    id!: number;

    @Field(() => String, {
            nullable: false,
        })
    name!: string;

    @Field(() => String, {
            nullable: false,
        })
    startDate!: Date | string;

    @Field(() => String, {
            nullable: false,
        })
    endDate!: Date | string;
}
