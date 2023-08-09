import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/database/entities/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async getUserByMail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { email },
      relations: { rule: true },
    });
    return user;
  }
}
