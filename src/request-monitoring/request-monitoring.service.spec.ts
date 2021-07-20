import { Test, TestingModule } from '@nestjs/testing';

import { RequestMonitoringService } from './request-monitoring.service';

describe('RequestMonitoringService', () => {
  let service: RequestMonitoringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestMonitoringService],
    }).compile();

    service = module.get<RequestMonitoringService>(RequestMonitoringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
