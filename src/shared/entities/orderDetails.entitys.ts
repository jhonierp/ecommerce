import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

@Entity('orderDetails')
export class OrderDetailsEntity {
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

  @Column('bigint', {
    nullable: false,
  })
  unit_price: number;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @DeleteDateColumn()
  deleted_at: Timestamp;
}
