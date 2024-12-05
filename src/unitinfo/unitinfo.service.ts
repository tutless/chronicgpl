import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { defer, from, of } from 'rxjs';
import { UnitInfo } from 'src/schemas/unitinfo.schema';

@Injectable()
export class UnitinfoService {
    constructor(@InjectModel(UnitInfo.name) private UnitInfoModel:Model<UnitInfo>){}

    getUnitInfoByJobOrder(joNumber:number){
        return defer(async() => await this.UnitInfoModel.find({uijonumber:joNumber}).lean())
    }

    getUnitInfoList(){
        const unitInfoProm = async() => await this.UnitInfoModel.find().lean()
        return from(unitInfoProm())
    }
}
