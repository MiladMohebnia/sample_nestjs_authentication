import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

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
    return APIResponse.success({
      message: 'you logged in',
      access_token: authResult,
    });
  }

  @Get('checkAuthData')
  @ApiBearerAuth('JWT')
  @UseGuards(AuthGuard('jwt'))
  logout(@Request() req) {
    return req.user;
  }
}
