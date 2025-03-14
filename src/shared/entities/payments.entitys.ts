import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

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
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @DeleteDateColumn()
  deleted_at: Timestamp;
}
