import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsNumber()
  @ApiProperty()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly category: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly owner: string;
}
