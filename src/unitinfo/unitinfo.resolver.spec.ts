import { Test, TestingModule } from '@nestjs/testing';
import { UnitinfoResolver } from './unitinfo.resolver';

describe('UnitinfoResolver', () => {
  let resolver: UnitinfoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitinfoResolver],
    }).compile();

    resolver = module.get<UnitinfoResolver>(UnitinfoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
