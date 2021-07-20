import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtStrategy } from './jwtStratagy';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { RequestEntity } from './request-monitoring/requestMonitoring.entity';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/users.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MARIADB_HOST,
      port: 3306,
      username: process.env.MARIADB_USERNAME,
      password: process.env.MARIADB_PASSWORD,
      database: process.env.MARIADB_DATABASE,
      entities: [UserEntity, RequestEntity],
      synchronize: true,
    }),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
    TaskModule,
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService, JwtStrategy],
})
export class AppModule {}
