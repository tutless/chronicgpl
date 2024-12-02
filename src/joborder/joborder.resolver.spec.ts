import { Test, TestingModule } from '@nestjs/testing';
import { JoborderResolver } from './joborder.resolver';

describe('JoborderResolver', () => {
  let resolver: JoborderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoborderResolver],
    }).compile();

    resolver = module.get<JoborderResolver>(JoborderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
