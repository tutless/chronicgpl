import { Test, TestingModule } from '@nestjs/testing';
import { JoborderService } from './joborder.service';

describe('JoborderService', () => {
  let service: JoborderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoborderService],
    }).compile();

    service = module.get<JoborderService>(JoborderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
