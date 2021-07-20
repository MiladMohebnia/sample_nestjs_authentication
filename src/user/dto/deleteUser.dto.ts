import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserDto {
  @ApiProperty({
    type: 'number',
    minProperties: 1,
  })
  userId: number | string;
}
