import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type JobOrderDocument = HydratedDocument<JobOrder>

@Schema({collection:'joborder'})
export class JobOrder{

   
    @Prop()
    jonumber:number

    @Prop()
    custname:string

    @Prop()
    address:string

    @Prop()
    telno:string

    @Prop()
    servicetype:string

    @Prop()
    otherinfo:string

    @Prop()
    warrantyinfo:string
}

export const JobOrderSchema = SchemaFactory.createForClass(JobOrder)