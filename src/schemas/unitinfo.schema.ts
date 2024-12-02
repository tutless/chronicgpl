import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UnitInfoDocument = HydratedDocument<UnitInfo>

@Schema({collection:"unitinfo"})
export class UnitInfo{
    @Prop()
    uiid:number
    @Prop()
    uijonumber:number
    @Prop()
    brand:string
    @Prop()
    model:string
    @Prop()
    serialno:string
}

export const UnitInfoSchema = SchemaFactory.createForClass(UnitInfo)