import { registerUserDto } from './registerUser.dto';
import { UserEntity } from './../users.entity';
export class registerUser {
  username: string;
  password: string;
  role: string[];

  constructor(data: registerUserDto) {
    this.username = data.username;
    this.role = data.role;
    this.password = data.password;
  }

  async toEntity() {
    let user = new UserEntity();
    user.username = this.username;
    await user.setPassword(this.password).catch(console.error);
    user.setRole(this.role);
    return user;
  }
}
