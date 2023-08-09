import { Injectable } from '@nestjs/common';
import { Room } from 'src/database/entities/room';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
  ) {}

  public async getRooms(): Promise<Room[]> {
    return await this.roomRepository.find();
  }

  public async getRoomsRoomPrice(): Promise<Room[]> {
    return await this.roomRepository.find({
      select: { id: true, price: true, room: true },
    });
  }
}
