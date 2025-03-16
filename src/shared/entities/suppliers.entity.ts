import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { SupplierProductEntity } from './supplierProduct.entity';

@Entity('suppliers')
export class SupplierEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  email: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  address: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  city: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @DeleteDateColumn()
  deleted_at: Timestamp;

  @OneToMany(
    () => SupplierProductEntity,
    (supplierProduct) => supplierProduct.supplier,
  )
  supplierProduct?: SupplierProductEntity[];
}
