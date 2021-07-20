import { RequestMonitoringGuard } from './../request-monitoring/requestMonitoring.guard';
import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

import { RoleGuard } from '../role.guard';
import { AddRequest } from './dto/addRequest.dto';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskS: TaskService) {}

  @Post('add')
  @ApiBody({ type: AddRequest })
  @ApiBearerAuth('JWT')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(['add']), RequestMonitoringGuard)
  sum(@Body() body: AddRequest) {
    if (
      typeof body.numbers[0] != 'number' ||
      typeof body.numbers[1] != 'number'
    ) {
      throw new BadRequestException();
    }
    return this.taskS.sum(body.numbers[0], body.numbers[1]);
  }
}
