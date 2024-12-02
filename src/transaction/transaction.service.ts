import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { defer } from 'rxjs';
import { Transaction } from 'src/schemas/transaction.schema';

@Injectable()
export class TransactionService {
    constructor(@InjectModel(Transaction.name) private TransactionModel:Model<Transaction>){}

    getTransactionByJobNumber(jobnumber:number){
        return defer(async() => await this.TransactionModel.findOne({transjonumber:jobnumber}).lean())
    }
}
