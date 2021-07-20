import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { RequestEntity } from './requestMonitoring.entity';

@Injectable()
export class RequestMonitoringService {
  constructor(
    @InjectRepository(RequestEntity)
    private requestRepo: Repository<RequestEntity>,
  ) {}

  add(userId: number) {
    this.requestRepo.insert({ userId });
  }

  async todayRequests(userId: number) {
    let result = await this.requestRepo
      .query(
        'select count(*) as requestCount from request where userId = ? and dt > now() - interval 1 hour',
        [userId],
      )
      .catch(console.error);
    if (!result?.length) {
      return 0;
    }
    return result[0].requestCount;
  }
}
