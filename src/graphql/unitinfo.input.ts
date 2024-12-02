import { Field, InputType, Int, ObjectType } from '@nestjs/graphql'

@InputType()
export class UnitInfoInput{
    @Field(type => Int)
    uiid:number
    @Field(type => Int)
    uijonumber:number
    @Field({nullable:true})
    brand?:string
    @Field({nullable:true})
    model?:string
    @Field({nullable:true})
    serialno?:string
}