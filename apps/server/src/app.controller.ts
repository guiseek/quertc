import { Controller, UseGuards, Get, Post, Request, Body } from '@nestjs/common'
import { JwtAuthGuard } from './auth/jwt-auth.guard'
import { LocalAuthGuard } from './auth/local-auth.guard'
import { AuthService } from './auth/auth.service'
import { Public } from './auth/auth-guard.decorator'
import { CreateUserDto } from './users/dto/create-user.dto'

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @Public()
  @Post('user/signup')
  async signup(@Body() user: CreateUserDto) {
    return this.authService.signup(user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}