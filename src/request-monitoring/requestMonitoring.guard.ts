import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { RequestMonitoringService } from './request-monitoring.service';

@Injectable()
export class RequestMonitoringGuard implements CanActivate {
  constructor(private requestMonitoringS: RequestMonitoringService) {}

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    this.requestMonitoringS.add(request.user.id);
    return true;
  }
}
