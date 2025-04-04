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
import { join } from 'path';

@Entity('inventoryHistory')
export class InventoryHistoryEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('bigint', {
    nullable: false,
  })
  product_id: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  movement_type: string;

  @Column('bigint', {
    nullable: false,
  })
  amount: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  reason: string;

  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @ManyToOne(() => ProductsEntity, (product) => product.inventoryHistory)
  @JoinColumn({ name: 'product_id' })
  product?: ProductsEntity;
}
