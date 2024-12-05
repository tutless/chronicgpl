import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JobOrderObj } from 'src/graphql/joborder.object';
import { JobOrder } from 'src/schemas/joborder.schema';
import {Model} from 'mongoose'
import {defer, first, forkJoin, from, map, mergeMap,of,toArray} from 'rxjs'
import { TransactionService } from 'src/transaction/transaction.service';
import { UnitinfoService } from 'src/unitinfo/unitinfo.service';
import { JobOrderInput } from 'src/graphql/joborder.input';
import {sortBy} from "lodash"

@Injectable()
export class JoborderService {
    constructor(
        @InjectModel(JobOrder.name) private JobOrderModel:Model<JobOrder>){}

    getJobOrderList(){
        const promJObOrder = async ()  => await this.JobOrderModel.find().lean()
        return from(promJObOrder());
    }

    getlastJoNumber(){
        return this.getJobOrderList()
        .pipe(map(joborder => sortBy(joborder, [(jNum) => jNum.jonumber, ]).reverse()),
            mergeMap(sorted => from(sorted)
                .pipe(map(jonum => jonum.jonumber),first())
            )
        )  
    }

    saveJobOrder(inputs:JobOrderInput){
       return this.getlastJoNumber().pipe(map(jonum => {
            return {
                jonumber: jonum + 1,
                ...inputs
            } 
        }),mergeMap(data => defer(async () => {
            await this.JobOrderModel.create(data);
            return data as JobOrderObj
        })))

    }
}
