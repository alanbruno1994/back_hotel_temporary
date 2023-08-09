import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwt } from 'src/constants/auth.constants';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwt,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
