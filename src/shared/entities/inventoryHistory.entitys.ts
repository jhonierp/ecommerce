import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

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
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @DeleteDateColumn()
  deleted_at: Timestamp;
}
