import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Rules } from './rules';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  brirty: Date;

  @Column() //Aqui se refere a outra coluna
  createdAt: string;
  @Column() //Aqui se refere a outra coluna
  updateAt: string;

  //Aqui usamos para ciar o relacionamento e aqui vai ficar o id de profile
  @OneToOne(() => Rules, { nullable: false })
  //Aqui usamos para colocar o nome da coluna usada na relacao
  @JoinColumn({ name: 'rule_id' })
  rule: Rules;
}
