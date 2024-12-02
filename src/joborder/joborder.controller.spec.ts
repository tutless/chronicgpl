import { Test, TestingModule } from '@nestjs/testing';
import { JoborderController } from './joborder.controller';

describe('JoborderController', () => {
  let controller: JoborderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JoborderController],
    }).compile();

    controller = module.get<JoborderController>(JoborderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
