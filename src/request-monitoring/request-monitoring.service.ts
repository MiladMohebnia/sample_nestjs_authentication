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
}
