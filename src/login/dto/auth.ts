import { AuthDto } from './auth.dto';

export class Auth {
  username: string;
  password: string;

  constructor(auth: AuthDto) {
    this.username = auth.username;
    this.password = auth.password;
  }

  validate() {
    let data = [this.username, this.password];
    if (
      data.includes(null) ||
      data.includes(undefined) ||
      data.includes('') ||
      data.includes(' ')
    ) {
      return false;
    }
    return true;
  }
}
