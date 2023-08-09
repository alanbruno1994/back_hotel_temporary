import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rules {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rule: string;

  @Column() //Aqui se refere a outra coluna
  createdAt: string;
  @Column() //Aqui se refere a outra coluna
  updateAt: string;
}
