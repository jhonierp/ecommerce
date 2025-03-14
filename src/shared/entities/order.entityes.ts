import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

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
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @DeleteDateColumn()
  deleted_at: Timestamp;
}
