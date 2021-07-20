import { RequestEntity } from './../request-monitoring/requestMonitoring.entity';
import { RequestMonitoringService } from './../request-monitoring/request-monitoring.service';
import { Module } from '@nestjs/common';

import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RequestEntity])],
  providers: [TaskService, RequestMonitoringService],
  controllers: [TaskController],
})
export class TaskModule {}
