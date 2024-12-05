import { Test, TestingModule } from '@nestjs/testing';
import { JobcompleteService } from './jobcomplete.service';

describe('JobcompleteService', () => {
  let service: JobcompleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobcompleteService],
    }).compile();

    service = module.get<JobcompleteService>(JobcompleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
