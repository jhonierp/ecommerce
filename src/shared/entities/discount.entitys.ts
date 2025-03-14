import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

@Entity('discount')
export class DiscountEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('bigint', {
    nullable: false,
  })
  product_id: number;

  @Column('bigint', {
    nullable: false,
  })
  category_id: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  name: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  description: string;

  @Column('decimal', {
    nullable: false,
  })
  percentage: number;

  @Column('datetime', {
    nullable: false,
  })
  start_date: Date;

  @Column('datetime', {
    nullable: false,
  })
  end_date: Date;

  @Column('tinyint', {
    nullable: false,
  })
  active: number;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @DeleteDateColumn()
  deleted_at: Timestamp;
}
