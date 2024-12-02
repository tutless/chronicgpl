import { Field, InputType, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class TransactionObj{

    @Field(type => Int)
    transid:number
    @Field(type => Int)
    transjonumber:number
    @Field({nullable:true})
    transtype?:string
    @Field({nullable:true})
    jodate?:string
    @Field({nullable:true})
    jodiagnosed?:string
    @Field({nullable:true})
    jorepair?:string
    @Field({nullable:true})
    jopullout?:string
    @Field({nullable:true})
    jorepaired?:string
    @Field({nullable:true})
    jodateout?:string
    @Field({nullable:true})
    customerinformed?:string
    @Field({nullable:true})
    cidate?:string
    @Field({nullable:true})
    repairaction?:string
    @Field({nullable:true})
    accessories?:string
    @Field({nullable:true})
    complain?:string
    @Field({nullable:true})
    dealer?:string
    @Field({nullable:true})
    datepurchase?:string
    @Field(type => Int)
    labor:number
    @Field(type => Int)
    transportation:number
    @Field(type => Int)
    shippingcost:number
    @Field(type => Int)
    othercharges:number
    @Field({nullable:true})
    checkupfee?:string
    @Field({nullable:true})
    discount?:string
}