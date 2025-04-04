import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateOrUpdateProductDto {
  @ApiProperty({
    type: Number,
    nullable: true,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  id?: number;

  @ApiProperty({
    type: Number,
    nullable: false,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  subcategory_id: number;

  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    type: Number,
    nullable: false,
    required: true,
    minimum: 0,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  sale_price: number;

  @ApiProperty({
    type: Number,
    nullable: false,
    required: true,
    minimum: 0,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  stock: number;
}
