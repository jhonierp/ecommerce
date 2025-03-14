import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

@Entity('supplierProduct')
export class SupplierProductEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('bigint', {
    nullable: false,
  })
  product_id: number;

  @Column('bigint', {
    nullable: false,
  })
  supplier_id: number;

  @Column('bigint', {
    nullable: false,
  })
  purchase_price: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  quantity_purchased: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @DeleteDateColumn()
  deleted_at: Timestamp;
}
