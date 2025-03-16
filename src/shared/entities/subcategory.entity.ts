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
import { ProductsEntity } from './product.entity';
import { CategoryEntity } from './category.entity';

@Entity('subcategory')
export class SubcategoryEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;
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

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @DeleteDateColumn()
  deleted_at: Timestamp;

  @OneToMany(() => ProductsEntity, (product) => product.subcategory)
  product?: ProductsEntity[];

  @ManyToOne(() => CategoryEntity, (category) => category.subcategory)
  @JoinColumn({ name: 'category_id' })
  category?: CategoryEntity;
}
