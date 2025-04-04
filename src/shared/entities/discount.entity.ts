import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { ProductsEntity } from './product.entity';
import { CategoryEntity } from './category.entity';

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
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @ManyToOne(() => ProductsEntity, (product) => product.discounts)
  @JoinColumn({ name: 'product_id' })
  product?: ProductsEntity;

  @ManyToOne(() => CategoryEntity, (category) => category.discounts)
  @JoinColumn({ name: 'category_id' })
  category?: CategoryEntity;
}
