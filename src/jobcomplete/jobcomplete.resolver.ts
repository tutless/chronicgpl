import { Query, Resolver } from '@nestjs/graphql';
import { JobcompleteService } from './jobcomplete.service';
import { JobCompleteObj } from 'src/graphql/job.cmplt.object';
import { Observable } from 'rxjs';

@Resolver(of => JobCompleteObj)
export class JobcompleteResolver {
    constructor(private jobcompleteService:JobcompleteService){}

    @Query(returns => [JobCompleteObj])
    getJobComplete():Observable<JobCompleteObj[]>{
        return this.jobcompleteService.getCompleteDetails()
    }
}
