import { Bets } from '../bet/bet.model';

import { BetService } from '../bet/bet.service';
import { UserService } from './users.service';
import { Users } from './users.model';
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateUserDto } from './users.dto';

@Resolver(of => Users)
export class UserResolver {
  constructor(
    @Inject(UserService) private userService: UserService,
    @Inject(BetService) private invoiceService: BetService
  ) { }

  @Query(() => Users)
  async getUserDetail(@Args('id') id: number): Promise<Users> {
    return await this.userService.getUserDetail(id);
  }

  @Query(() => [Users])
  async getUserList(): Promise<Users[]> {
    return await this.userService.getUserList();
  }

  @Mutation(() => Users)
  async createUser(@Args('input') data: CreateUserDto): Promise<Users> {
    return await this.userService.create(data)
  }
}