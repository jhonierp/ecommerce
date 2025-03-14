import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('bigint', {
    nullable: false,
  })
  subcategory_id: number;

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

  @Column('bigint', {
    nullable: false,
  })
  sale_price: number;

  @Column('bigint', {
    nullable: false,
  })
  stock: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  image: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @DeleteDateColumn()
  deleted_at: Timestamp;
}
