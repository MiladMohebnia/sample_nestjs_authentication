import { Repository } from 'typeorm';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { APIResponse } from '../apiResponse';
import { DeleteUserDto } from './dto/deleteUser.dto';
import { registerUser } from './dto/registerUser';
import { UserEntity } from './users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async register(registerUser: registerUser) {
    let user: UserEntity = await registerUser.toEntity();
    if (user) {
      if (await this.userRepo.insert(user).catch(console.error)) {
        return APIResponse.success();
      }
      return APIResponse.failed({ message: 'username already exists' });
    }
    console.error('creating user entity failed on ', registerUser);
    throw new HttpException('internal Error', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  async delete(deleteUser: DeleteUserDto) {
    let result = await this.userRepo
      .delete(deleteUser.userId)
      .catch(console.error);
    if (result && result.affected > 0) {
      return APIResponse.success();
    }
    return APIResponse.failed({ message: 'user has been deleted before' });
  }

  async getByUsername(username: string): Promise<UserEntity | false> {
    let user = await this.userRepo
      .find({ where: { username } })
      .catch(console.error);
    if (!user || user.length == 0) {
      return false;
    }
    return user[0];
  }
}
