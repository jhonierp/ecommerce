import { join } from 'path';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { ReturnEntity } from './return.entity';
import { OrderDetailsEntity } from './orderDetails.entity';
import { StatusOrderEntity } from './statusOrder.entity';
import { PaymentsEntity } from './payments.entity';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('bigint', {
    nullable: false,
  })
  user_id: number;

  @Column('bigint', {
    nullable: false,
  })
  status_id: number;

  @Column('bigint', {
    nullable: false,
  })
  total_price: number;
  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @ManyToOne(() => UserEntity, (user) => user.order)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;

  @ManyToOne(() => StatusOrderEntity, (status) => status.order)
  @JoinColumn({ name: 'status_id' })
  status?: StatusOrderEntity;

  @OneToMany(() => ReturnEntity, (returnEntity) => returnEntity.order)
  returns?: ReturnEntity[];

  @OneToMany(() => OrderDetailsEntity, (orderDetails) => orderDetails.order)
  orderDetails?: OrderDetailsEntity[];

  @OneToMany(() => PaymentsEntity, (payments) => payments.order)
  payments?: PaymentsEntity[];
}
