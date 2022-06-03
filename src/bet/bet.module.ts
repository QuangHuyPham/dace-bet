import { CustomerModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { BetService } from './bet.service';
import { InvoiceResolver } from './bet.resolver';
import { Bets } from './bet.model';

@Module({
  imports: [TypeOrmModule.forFeature([Bets]), forwardRef(() => CustomerModule)],
  providers: [BetService, InvoiceResolver],
  exports: [BetService]
})
export class InvoiceModule {}
