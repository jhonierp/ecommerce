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
import { ProductsEntity } from './product.entity';
import { OrderEntity } from './order.entity';
import { StayPayReturnEntity } from './stayPayReturn.entity';

@Entity('return')
export class ReturnEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('bigint', {
    nullable: false,
  })
  order_id: number;

  @Column('bigint', {
    nullable: false,
  })
  product_id: number;

  @Column('bigint', {
    nullable: false,
  })
  amount: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  reason: string;

  @Column('bigint', {
    nullable: false,
  })
  state_id: string;

  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @ManyToOne(() => ProductsEntity, (product) => product.returns)
  @JoinColumn({ name: 'product_id' })
  product?: ProductsEntity;

  @ManyToOne(() => OrderEntity, (order) => order.returns)
  @JoinColumn({ name: 'order_id' })
  order?: OrderEntity;

  @ManyToOne(() => StayPayReturnEntity, (state) => state.returns)
  @JoinColumn({ name: 'state_id' })
  state?: StayPayReturnEntity;
}
