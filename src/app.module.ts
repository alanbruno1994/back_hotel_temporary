import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './database/entities/user';
import { Rules } from './database/entities/rules';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { Room } from './database/entities/room';
import { RoomModule } from './room/room.module';
import { Reserver } from './database/entities/reserver';
import { ReserverModule } from './reserver/reserver.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'example',
      database: 'example',
      entities: [User, Rules, Room, Reserver],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    RoomModule,
    ReserverModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
