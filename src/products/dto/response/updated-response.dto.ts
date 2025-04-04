import { ApiProperty } from '@nestjs/swagger';

export class UpdatedResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  statusCode: number;
}
