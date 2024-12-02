import { Test, TestingModule } from '@nestjs/testing';
import { UnitinfoService } from './unitinfo.service';

describe('UnitinfoService', () => {
  let service: UnitinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitinfoService],
    }).compile();

    service = module.get<UnitinfoService>(UnitinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
