import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { OrderEntity } from './order.entity';
import { StayPayReturnEntity } from './stayPayReturn.entity';
import { PaymentMethodEntity } from './paymentMethod.entity';

@Entity('payments')
export class PaymentsEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('bigint', {
    nullable: false,
  })
  order_id: number;

  @Column('bigint', {
    nullable: false,
  })
  method_id: number;

  @Column('bigint', {
    nullable: false,
  })
  amount: number;

  @Column('bigint', {
    nullable: false,
  })
  status_id: number;

  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @ManyToOne(() => OrderEntity, (order) => order.payments)
  @JoinColumn({ name: 'order_id' })
  order?: OrderEntity;

  @ManyToOne(() => StayPayReturnEntity, (status) => status.payments)
  @JoinColumn({ name: 'status_id' })
  status?: StayPayReturnEntity;

  @ManyToOne(() => PaymentMethodEntity, (method) => method.payments)
  @JoinColumn({ name: 'method_id' })
  method?: PaymentMethodEntity;
}
