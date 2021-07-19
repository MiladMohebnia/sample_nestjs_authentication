import { registerUserDto } from './dto/registerUser.dto';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { registerUser } from './dto/registerUser';
import { ApiBody } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private userS: UserService) {}

  @Put()
  @ApiBody({ type: registerUserDto })
  register(@Body() body: registerUserDto) {
    let user = new registerUser(body);
    if (!user.validate()) {
      throw new HttpException('bad requset', HttpStatus.BAD_REQUEST);
    }
    return this.userS.register(user);
  }
}
