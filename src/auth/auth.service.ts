import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/database/entities/user';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async singIn(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserByMail('sosvari21@gmail.com');

    if (user && user.password !== pass) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;
    const payload = { sub: user.id };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      user: result,
    };
  }

  async singIn2(): Promise<any> {
    const user = await this.usersService.getUserByMail('sosvari21@gmail.com');

    if (!user) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;
    const payload = { sub: user.id };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      user: result,
    };
  }
}
