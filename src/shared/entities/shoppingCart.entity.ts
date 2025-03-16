import { join } from 'path/posix';
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
import { UserEntity } from './user.entity';

@Entity('shoppingCart')
export class ShoppingCartEntity {
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
  amount: number;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @DeleteDateColumn()
  deleted_at: Timestamp;

  @ManyToOne(() => ProductsEntity, (product) => product.shoppingCart)
  @JoinColumn({ name: 'product_id' })
  product?: ProductsEntity;

  @ManyToOne(() => UserEntity, (user) => user.shoppingCart)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
