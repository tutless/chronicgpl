import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from 'src/schemas/transaction.schema';

@Module({
  imports:[
    MongooseModule.forFeature(
      [
        {
          name: Transaction.name,
          schema: TransactionSchema
        }
      ]
    )

  ],
  providers: [TransactionService],
  exports:[TransactionService]
})
export class TransactionModule {}
