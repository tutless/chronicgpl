import { Module } from '@nestjs/common';
import { JobcompleteService } from './jobcomplete.service';
import { JobcompleteResolver } from './jobcomplete.resolver';
import { TransactionModule } from 'src/transaction/transaction.module';
import { UnitinfoModule } from 'src/unitinfo/unitinfo.module';
import { JoborderModule } from 'src/joborder/joborder.module';

@Module({
    providers:[
        JobcompleteService,
        JobcompleteResolver
    ],
    imports:[
        TransactionModule,
        UnitinfoModule,
        JoborderModule
    ]
})
export class JobcompleteModule {}
