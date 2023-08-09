import { Body, Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @HttpCode(HttpStatus.OK)
  @Get('')
  getRooms(d: Request) {
    console.log(d?.headers, '//');
    return this.roomService.getRooms();
  }

  @HttpCode(HttpStatus.OK)
  @Get('reserver')
  getRoomsReserver(d: Request) {
    console.log(d?.headers, '//');
    return this.roomService.getRoomsRoomPrice();
  }
}
