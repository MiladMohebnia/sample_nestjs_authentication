import { ApiProperty } from '@nestjs/swagger';

export class DivideRequest {
  @ApiProperty({ type: ['number'] })
  numbers: number[];
}
