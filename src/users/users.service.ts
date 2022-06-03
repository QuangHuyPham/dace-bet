import { Injectable } from '@nestjs/common';
import { Users } from './users.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  create(data: CreateUserDto): Promise<Users>{
    return this.userRepository.save(data);
  }

  getUserList(): Promise<Users[]> {
    return this.userRepository.find();
  }

  getUserDetail(id: number): Promise<Users> {
    return this.userRepository.findOne(id);
  }
}
