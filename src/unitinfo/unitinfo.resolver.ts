import { Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { UnitInfoObj } from 'src/graphql/unitinfo.object';
import { UnitinfoService } from './unitinfo.service';

@Resolver(of => UnitInfoObj)
export class UnitinfoResolver {
    constructor(private unitinfoService: UnitinfoService) {}

    @Query(returns => [UnitInfoObj])
    getUnitInfos(): Observable<UnitInfoObj[]> {
        return  this.unitinfoService.getUnitInfoList();
    }
}
