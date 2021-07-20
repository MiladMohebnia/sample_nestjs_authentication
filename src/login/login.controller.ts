import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { APIResponse } from '../apiResponse';
import { Auth } from './dto/auth';
import { AuthDto } from './dto/auth.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginS: LoginService) {}

  @Post()
  @ApiBody({ type: AuthDto })
  async authenticate(@Body() body: AuthDto) {
    let auth = new Auth(body);
    if (!auth.validate()) {
      throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
    }
    let authResult = await this.loginS.auth(auth);
    if (!authResult) {
      return APIResponse.failed({
        message: "username and password doesn't match",
      });
    }
    return APIResponse.success({ message: 'you logged in' });
  }
}
