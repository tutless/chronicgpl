import { Injectable } from '@nestjs/common';
import { forkJoin, from, map, mergeMap, toArray } from 'rxjs';
import { JoborderService } from 'src/joborder/joborder.service';
import { TransactionService } from 'src/transaction/transaction.service';
import { UnitinfoService } from 'src/unitinfo/unitinfo.service';

@Injectable()
export class JobcompleteService {
    constructor(
        private transactionService:TransactionService,
        private unitInfoService:UnitinfoService,
        private jobOrderService:JoborderService
    ){}

   
    getJobOrderWithTransaction(){
        return this.jobOrderService.getJobOrderList()
        .pipe(mergeMap((joborder) => from(joborder)
        .pipe(mergeMap((hasTransaction) => this.transactionService.getTransactionByJobNumber(hasTransaction.jonumber)
        .pipe(map((transaction) => {
         return {
             ...hasTransaction,
             transaction
 
         }
        }))),toArray())))
          
     }

     getCompleteDetails(){
        return this.jobOrderService.getJobOrderList()
         .pipe(mergeMap((joborder) => from(joborder)
         .pipe(mergeMap((hasJoborder) => forkJoin({transaction:this.transactionService.getTransactionByJobNumber(hasJoborder.jonumber), unitinfo: this.unitInfoService.getUnitInfoByJobOrder(hasJoborder.jonumber)})
         .pipe(map((result) => {
             return {
                 ...hasJoborder,
                 ...result
             }
         }))),toArray())))
     }
}

