import {
  Controller,
  Post,
  Body,
  Req,
  Delete,
  UseGuards,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CustomerRequest } from 'src/interface/global';
import { AuthGuard } from '../../common/guards/auth.guard';
import { LogOutDto, LoginDto } from './dto';
import { IsTokenValidDto } from './dto/token-valid.dto';
import { Response } from 'express';
import { handleError } from 'src/common/handleError';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto, @Req() request: CustomerRequest) {
    const origin = request.origin;

    loginDto.origin = origin;

    return this.authService.login(loginDto);
  }

  @UseGuards(AuthGuard)
  @Delete('logout')
  async logOut(@Req() request: CustomerRequest, @Res() response: Response) {
    const logOutDto: LogOutDto = {
      origin: request.origin,
      userId: request.userId,
    };
    try {
      await this.authService.logout(logOutDto);
      return response.status(204).json();
    } catch (error) {
      return handleError(error);
    }
  }

  @Post('check/token')
  isTokenValid(@Body() isTokenValidDto: IsTokenValidDto) {
    return this.authService.isTokenValid(isTokenValidDto);
  }
}
