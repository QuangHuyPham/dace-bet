import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Bets } from 'src/bet/bet.model';

@ObjectType()
@Entity()
export class Users {
  @Field()
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 500, nullable: false })
  name: string;

  @Field()
  @Column({ nullable: true })
  balance: number;

  @Field(() => [Bets], { nullable: true })
  @OneToMany(() => Bets, (bet) => bet.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'userId' })
  bets: Bets[];

  @Field()
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
