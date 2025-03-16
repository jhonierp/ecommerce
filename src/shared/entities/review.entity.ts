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
import { UserEntity } from './user.entity';

@Entity('review')
export class ReviewEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('bigint', {
    nullable: false,
  })
  user_id: number;

  @Column('bigint', {
    nullable: false,
  })
  product_id: number;

  @Column('bigint', {
    nullable: false,
  })
  rating: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  comment: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @DeleteDateColumn()
  deleted_at: Timestamp;

  @ManyToOne(() => ProductsEntity, (product) => product.reviews)
  @JoinColumn({ name: 'product_id' })
  product?: ProductsEntity;

  @ManyToOne(() => UserEntity, (user) => user.reviews)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
