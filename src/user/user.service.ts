import { registerUser } from './dto/registerUser';
import { UserEntity } from './users.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async register(registerUser: registerUser) {
    let user: UserEntity = await registerUser.toEntity();
    if (user) {
      return this.userRepo.insert(user);
    }
    console.error('creating user entity failed on ', registerUser);
    throw new HttpException('internal Error', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
