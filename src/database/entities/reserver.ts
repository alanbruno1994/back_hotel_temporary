import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { User } from './user';
import { Room } from './room';

@Entity()
export class Reserver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  price: number;

  @Column() //Aqui se refere a outra coluna
  createdAt: Date;
  @Column() //Aqui se refere a outra coluna
  updateAt: Date;

  //Aqui usamos para ciar o relacionamento e aqui vai ficar o id de profile
  @OneToOne(() => User, { nullable: false })
  //Aqui usamos para colocar o nome da coluna usada na relacao
  @JoinColumn({ name: 'userId' })
  user: User;

  //Aqui usamos para ciar o relacionamento e aqui vai ficar o id de profile
  @OneToOne(() => Room, { nullable: false })
  //Aqui usamos para colocar o nome da coluna usada na relacao
  @JoinColumn({ name: 'roomId' })
  room: Room;
}
