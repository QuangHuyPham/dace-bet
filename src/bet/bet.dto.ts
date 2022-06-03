import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateBetDto { 
    @Field()
    userId: number;

    @Field()	
    betAmount: number;

    @Field()
    chance: number;
}
