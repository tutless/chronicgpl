import { Test, TestingModule } from '@nestjs/testing';
import { JobcompleteResolver } from './jobcomplete.resolver';

describe('JobcompleteResolver', () => {
  let resolver: JobcompleteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobcompleteResolver],
    }).compile();

    resolver = module.get<JobcompleteResolver>(JobcompleteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
