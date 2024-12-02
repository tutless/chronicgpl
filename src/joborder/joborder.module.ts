import { Module } from '@nestjs/common';
import { JoborderService } from './joborder.service';
import { MongooseModule } from '@nestjs/mongoose';
import {JobOrder, JobOrderSchema} from '../schemas/joborder.schema'
import { JoborderResolver } from './joborder.resolver';
import { JoborderController } from './joborder.controller';
import { TransactionModule } from 'src/transaction/transaction.module';
import { UnitinfoModule } from 'src/unitinfo/unitinfo.module';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub()

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: JobOrder.name,
        schema: JobOrderSchema

      }
    ]),
    TransactionModule,
    UnitinfoModule

  ],
  providers: [
    JoborderService, 
    JoborderResolver,
    {
      provide: 'PUB_SUB',
      useValue: pubSub
    }
  ],
  controllers: [JoborderController]
})
export class JoborderModule {}
