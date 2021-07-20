import { ApiProperty } from '@nestjs/swagger';

export class SubtractRequest {
  @ApiProperty({ type: ['number'] })
  numbers: number[];
}
