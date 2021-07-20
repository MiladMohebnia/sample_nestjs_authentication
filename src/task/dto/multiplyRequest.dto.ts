import { ApiProperty } from '@nestjs/swagger';

export class multiplyRequest {
  @ApiProperty({ type: ['number'] })
  numbers: number[];
}
