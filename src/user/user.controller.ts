import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userS: UserService) {}

  @Get('all')
  getAll() {
    return this.userS.findAll();
  }
}
