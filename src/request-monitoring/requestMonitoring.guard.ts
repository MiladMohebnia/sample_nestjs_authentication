import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

import { RequestMonitoringService } from './request-monitoring.service';

@Injectable()
export class RequestMonitoringGuard implements CanActivate {
  constructor(private requestMonitoringS: RequestMonitoringService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if (
      request.user.dailyLimit <=
      (await this.requestMonitoringS.todayRequests(request.user.id))
    ) {
      throw new HttpException(
        'you reached your daily limitation',
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }
    this.requestMonitoringS.add(request.user.id);
    return true;
  }
}
