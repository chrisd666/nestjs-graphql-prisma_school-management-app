import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Student {

    @Field(() => ID, {
            nullable: false,
        })
    id!: number;

    @Field(() => String, {
            nullable: false,
        })
    firstName!: string;

    @Field(() => String, {
            nullable: false,
        })
    lastName!: string;
}
