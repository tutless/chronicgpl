import { Module } from '@nestjs/common';
import { UnitinfoService } from './unitinfo.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UnitInfoSchema, UnitInfo } from 'src/schemas/unitinfo.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name:UnitInfo.name,
        schema:UnitInfoSchema
      }

    ])

  ],
  providers: [UnitinfoService],
  exports:[UnitinfoService]
})
export class UnitinfoModule {}
