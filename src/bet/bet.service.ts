import { UserService } from '../users/users.service';
import { Bets } from './bet.model';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBetDto } from './bet.dto';

@Injectable()
export class BetService {
  constructor(
    @InjectRepository(Bets)
    private betRepository: Repository<Bets>,
    private userService: UserService,
  ) {}

  async createBet(bet: CreateBetDto): Promise<Bets> {
    return this.betRepository.save({
      ...bet,
    } as any);
  }

  getBetList(): Promise<Bets[]> {
    return this.betRepository.find();
  }

  findByCustomer(id: string): Promise<Bets[]> {
    return this.betRepository
      .createQueryBuilder('invoice')
      .where('invoice.customer = :id', { id })
      .getMany();
  }

  getBet(id: number): Promise<Bets> {
    return this.betRepository.findOne(id);
  }
}
