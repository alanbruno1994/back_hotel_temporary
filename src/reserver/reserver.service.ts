import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserver } from 'src/database/entities/reserver';
import { RoomService } from 'src/room/room.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class ReserverService {
  constructor(
    @InjectRepository(Reserver)
    private reserverRepository: Repository<Reserver>,
    private usersService: UserService,
    private roomService: RoomService,
  ) {}

  public makeReserver(
    id: number,
    values: {
      startDate: Date;
      endDate: Date;
      idRoom: number;
      people: number;
      children: boolean;
    },
  ) {
    const create = this.reserverRepository.create(values);
    this.reserverRepository.save(create);
  }
}
