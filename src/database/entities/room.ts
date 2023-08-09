import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  room: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  price: string;

  @Column() //Aqui se refere a outra coluna
  createdAt: string;
  @Column() //Aqui se refere a outra coluna
  updateAt: string;
}
