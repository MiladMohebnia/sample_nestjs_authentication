import { registerUserDto } from './dto/registerUser.dto';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Put,
  HttpException,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { registerUser } from './dto/registerUser';
import { ApiBody } from '@nestjs/swagger';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { DeleteUser } from './dto/deleteUser';

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

  @Delete()
  @ApiBody({ type: DeleteUserDto })
  delete(@Body() body: DeleteUserDto) {
    let deleteUser = new DeleteUser(body);
    if (!deleteUser.validate()) {
      throw new HttpException('bad requset', HttpStatus.BAD_REQUEST);
    }
    return this.userS.delete(deleteUser);
  }
}
