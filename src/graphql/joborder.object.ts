import { Field, Int, ObjectType } from '@nestjs/graphql'
import { TransactionObj } from './transaction.object'
import { UnitInfoObj } from './unitinfo.object'

@ObjectType()
export class JobOrderObj{

   
    @Field(type => Int)
    jonumber: number

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