import { ApiProperty } from '@nestjs/swagger';

export class AddRequest {
  @ApiProperty({ type: ['number'] })
  numbers: number[];
}
