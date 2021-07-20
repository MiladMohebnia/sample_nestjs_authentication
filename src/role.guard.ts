import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private expectationRoleList: string[]) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    for (let expectation of this.expectationRoleList) {
      if (!request.user.role.includes(expectation)) {
        return false;
      }
    }
    return true;
  }
}
