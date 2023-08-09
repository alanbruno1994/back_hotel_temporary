import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/login/teacher')
  signIn() {
    console.warn('teacher');
    return this.authService.singIn2();
  }

  @HttpCode(HttpStatus.OK)
  @Post('login/student')
  signIn2() {
    console.warn('student');
    return this.authService.singIn2();
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login/visitor')
  signIn3() {
    console.warn('visitor');
    return this.authService.singIn2();
  }
}
