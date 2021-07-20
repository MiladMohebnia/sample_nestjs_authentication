import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { Auth } from './dto/auth';

@Injectable()
export class LoginService {
  constructor(private userS: UserService, private jwtS: JwtService) {}

  async auth(auth: Auth): Promise<false | string> {
    let user = await this.userS.getByUsername(auth.username);
    if (!user || !(await user.checkPassword(auth.password))) {
      return false;
    }
    let payload = user.readableData();

    return this.jwtS.sign(payload);
  }
}
