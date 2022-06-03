import { InvoiceModule } from '../bet/bet.module';
import { Users } from './users.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './users.service';
import { UserResolver } from './users.resolver';


@Module({
  imports: [forwardRef(() => InvoiceModule), TypeOrmModule.forFeature([Users])],
  providers: [UserService, UserResolver],
  exports: [UserService]
})
export class CustomerModule {}
