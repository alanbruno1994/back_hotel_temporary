import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from 'src/database/entities/room';
import { RoomService } from './room.service';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomService],
  controllers: [RoomController],
  exports: [RoomService],
})
export class RoomModule {}
