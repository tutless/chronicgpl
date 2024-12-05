import { Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { TransactionObj } from 'src/graphql/transaction.object';
import { TransactionService } from './transaction.service';

@Resolver(of => TransactionObj)
export class TransactionResolver {
    constructor(private transactionService: TransactionService) {}

    @Query(returns => [TransactionObj])
    getTransactions(): Observable<TransactionObj[]> {
        return  this.transactionService.getTransactionList()
    }
}
