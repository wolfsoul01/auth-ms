import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

enum Sex {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export class CreateUserDto {
  @ApiProperty({
    description: 'La contraseña del usuario',
    minLength: 8,
    example: 'securePassword123',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'El correo electrónico del usuario',
    example: 'johndoe@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiPropertyOptional({
    description: 'El nombre del usuario',
    example: 'John',
  })
  @IsString()
  @IsOptional()
  fullName: string;

  @ApiPropertyOptional({
    description: 'La dirección del usuario',
    example: '123 Main St',
  })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiPropertyOptional({
    description: 'El número de teléfono del usuario',
    example: '+1234567890',
  })
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional({
    description: 'El sexo del usuario',
    enum: Sex,
    example: Sex.MALE,
  })
  @IsEnum(Sex)
  @IsOptional()
  sex: Sex;

  @ApiPropertyOptional({
    description: 'El estado del usuario',
    example: 'California',
  })
  @IsString()
  @IsOptional()
  state: string;

  @ApiPropertyOptional({
    description: 'El municipio del usuario',
    example: 'Los Angeles',
  })
  @IsString()
  @IsOptional()
  municipality: string;

  @ApiPropertyOptional({
    description: 'El país del usuario',
    example: 'USA',
  })
  @IsString()
  @IsOptional()
  country: string;
}
