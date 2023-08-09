import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwt } from 'src/constants/auth.constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    console.log('p1 ', token);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwt,
      });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers

      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    console.log('request ', request.headers);
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    console.log('type ' + type, token);
    if (type === 'Bearer') {
      return token;
    }
    return token;
  }
}
