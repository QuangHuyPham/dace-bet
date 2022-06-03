import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Users } from '../users/users.model';

export enum Currency {
  NGN = 'VND',
  USD = 'USD',
  EUR = ' EUR',
}
export enum PaymentStatus {
  PAID = 'PAID',
  NOT_PAID = 'NOT_PAID',
}

@ObjectType()
@Entity()
export class Bets {
  @Field()
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column('bigint', { name: 'userId' })
  userId: number;

  @Field(() => [Users], { nullable: true })
  @ManyToOne(() => Users, (user) => user.bets)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: Users;

  @Column({ default: 0, type: 'float' })
  @Field()
  betAmount: number;

  @Column({ default: 0, type: 'float' })
  @Field()
  chance: number;

  @Column({ default: 0, type: 'float' })
  @Field()
  payout: number;

  @Field({ defaultValue: true })
    @Column('boolean', {
      name: 'win',
      default: true,
    })
  win?: boolean;

  @Field()
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
