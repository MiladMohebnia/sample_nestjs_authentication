import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

import { RequestMonitoringGuard } from '../request-monitoring/requestMonitoring.guard';
import { RoleGuard } from '../role.guard';
import { AddRequest } from './dto/addRequest.dto';
import { DivideRequest } from './dto/divideRequest.dto';
import { multiplyRequest } from './dto/multiplyRequest.dto';
import { SubtractRequest } from './dto/subtractRequest.dto';
import { TaskService } from './task.service';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'), RequestMonitoringGuard)
export class TaskController {
  constructor(private taskS: TaskService) {}

  @Post('add')
  @ApiBody({ type: AddRequest })
  @ApiBearerAuth('JWT')
  @UseGuards(new RoleGuard(['add']))
  sum(@Body() body: AddRequest) {
    if (
      typeof body.numbers[0] != 'number' ||
      typeof body.numbers[1] != 'number'
    ) {
      throw new BadRequestException();
    }
    return this.taskS.sum(body.numbers[0], body.numbers[1]);
  }

  @Post('divide')
  @ApiBody({ type: DivideRequest })
  @ApiBearerAuth('JWT')
  @UseGuards(new RoleGuard(['divide']))
  dev(@Body() body: DivideRequest) {
    if (
      typeof body.numbers[0] != 'number' ||
      typeof body.numbers[1] != 'number'
    ) {
      throw new BadRequestException();
    }
    return this.taskS.dev(body.numbers[0], body.numbers[1]);
  }

  @Post('multiply')
  @ApiBody({ type: multiplyRequest })
  @ApiBearerAuth('JWT')
  @UseGuards(new RoleGuard(['multiply']))
  mul(@Body() body: multiplyRequest) {
    if (
      typeof body.numbers[0] != 'number' ||
      typeof body.numbers[1] != 'number'
    ) {
      throw new BadRequestException();
    }
    return this.taskS.mul(body.numbers[0], body.numbers[1]);
  }

  @Post('subtract')
  @ApiBody({ type: SubtractRequest })
  @ApiBearerAuth('JWT')
  @UseGuards(new RoleGuard(['subtract']))
  sub(@Body() body: SubtractRequest) {
    if (
      typeof body.numbers[0] != 'number' ||
      typeof body.numbers[1] != 'number'
    ) {
      throw new BadRequestException();
    }
    return this.taskS.sub(body.numbers[0], body.numbers[1]);
  }
}
