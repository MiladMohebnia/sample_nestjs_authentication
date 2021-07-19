import { registerUserDto } from './dto/registerUser.dto';
import { UserService } from './user.service';
import { Body, Controller, Put } from '@nestjs/common';
import { registerUser } from './dto/registerUser';

@Controller('user')
export class UserController {
  constructor(private userS: UserService) {}

  @Put()
  register(@Body() body: registerUserDto) {
    let user = new registerUser(body);
    return this.userS.register(user);
  }
}
