import { Controller, Get } from '@nestjs/common';
import { JoborderService } from './joborder.service';
import { response } from 'express';

@Controller('joborder')
export class JoborderController {
    constructor(private jobOrderService:JoborderService){}

    @Get('/intro')
    jobOrderInto(){
        return {
            response: response.status,
            message: 'Hey'
        }
    }

    @Get('/transaction')
    jobOrderTransaction(){
        return this.jobOrderService.getJobOrderWithTransaction()
    }

    @Get('/all')
    jobOrderAllList(){
        return this.jobOrderService.getJobOrderList()
    }

    @Get('all-details')
    jobOrderAllDetails(){
        return this.jobOrderService.getCompleteDetails()
    }


}
