import { ApiProperty } from '@nestjs/swagger';

export class registerUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ type: [String] })
  role: string[];
}
