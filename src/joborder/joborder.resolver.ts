import { Args, Int, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { JobOrderObj } from 'src/graphql/joborder.object';
import { JoborderService } from './joborder.service';
import { Observable } from 'rxjs';
import { PubSub } from 'graphql-subscriptions';
import { Inject } from '@nestjs/common';
import { JobOrderInput } from 'src/graphql/joborder.input';
import { map } from 'rxjs/operators';
import { JobCompleteObj } from 'src/graphql/job.cmplt.object';



@Resolver(of => JobOrderObj)
export class JoborderResolver {
    constructor(private jobOrderService:JoborderService,  @Inject('PUB_SUB') private pubSub:PubSub){}

    
    @Query(returns => [JobOrderObj])
    getJobOrder():Observable<JobOrderObj[]>{
        return this.jobOrderService.getJobOrderList()
    }
    

    @Mutation(() => JobOrderObj)
    createJobOrder(@Args('jobInput') jobInput:JobOrderInput){
        return this.jobOrderService.saveJobOrder(jobInput)
    }

   

   



   

}
