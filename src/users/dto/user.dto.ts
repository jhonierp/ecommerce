import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOrUpdateUserDto {
  @ApiProperty({
    type: Number,
    nullable: true,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  @IsString()
  name2: string;

  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  @IsString()
  last_name: string;

  @ApiProperty({
    type: String,
    nullable: true,
    required: false,
  })
  @IsString()
  last_name2: string;

  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  @IsString()
  email: string;

  @ApiProperty({
    type: String,
    nullable: false,
    required: false,
  })
  @IsOptional()
  @IsString()
  password: string;

  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  @IsString()
  phone: string;

  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  @IsString()
  address: string;

  @ApiProperty({
    type: Number,
    nullable: false,
    required: true,
  })
  @IsOptional()
  User_type_id: number;
}
