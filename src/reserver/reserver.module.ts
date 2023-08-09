import { Module } from '@nestjs/common';
import { ReserverService } from './reserver.service';
import { ReserverController } from './reserver.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserver } from 'src/database/entities/reserver';
import { UserModule } from 'src/user/user.module';
import { RoomModule } from 'src/room/room.module';

@Module({
  imports: [TypeOrmModule.forFeature([Reserver]), UserModule, RoomModule],
  providers: [ReserverService],
  controllers: [ReserverController],
})
export class ReserverModule {}
