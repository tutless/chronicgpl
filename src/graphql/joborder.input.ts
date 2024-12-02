import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class JobOrderInput{

    @Field({nullable:true})
    custname?:string

    @Field({nullable:true})
    address?:string

    @Field({nullable:true})
    telno?:string

    @Field({nullable:true})
    servicetype?:string

    @Field({nullable:true})
    warrantyinfo?:string
    
    @Field({nullable:true})
    otherinfo?:string


}