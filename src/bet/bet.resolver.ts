import { Users } from '../users/users.model';
import { UserService } from '../users/users.service';
import { BetService } from './bet.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Bets } from './bet.model';
import { CreateBetDto } from './bet.dto';

@Resolver(of => Bets)
export class InvoiceResolver {
  constructor(
    @Inject(BetService) private betService: BetService,
    @Inject(UserService) private userService: UserService
  ) { }

  @Query(() => Bets)
  async getBet(@Args('id') id: number): Promise<Bets> {
    return await this.betService.getBet(id);
  }

  @Query(() => [Bets])
  async getBetList(): Promise<Bets[]> {
    return await this.betService.getBetList();
  }

  @Mutation(() => Bets)
  async createBet( @Args('bet') bet: CreateBetDto ): Promise<Bets> {
    return await this.betService.createBet(bet)
  }
}