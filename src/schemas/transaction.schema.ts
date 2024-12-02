import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TransactionDocument = HydratedDocument<Transaction>

@Schema({collection:'transaction'})
export class Transaction{
    @Prop()
    transid:number
    @Prop()
    transjonumber:number
    @Prop()
    transtype:string
    @Prop()
    jodate:string
    @Prop()
    jodiagnosed:string
    @Prop()
    jorepair:string
    @Prop()
    jopullout:string
    @Prop()
    jorepaired:string
    @Prop()
    jodateout:string
    @Prop()
    customerinformed:string
    @Prop()
    cidate:string
    @Prop()
    repairaction:string
    @Prop()
    accessories:string
    @Prop()
    complain:string
    @Prop()
    dealer:string
    @Prop()
    datepurchase:string
    @Prop()
    labor:number
    @Prop()
    transportation:number
    @Prop()
    shippingcost:number
    @Prop()
    othercharges:number
    @Prop()
    checkupfee:string
    @Prop()
    discount:string
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction)
