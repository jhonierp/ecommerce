import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { ProductsEntity } from './product.entity';
import { SupplierEntity } from './suppliers.entity';

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
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @ManyToOne(() => ProductsEntity, (product) => product.supplierProduct)
  @JoinColumn({ name: 'product_id' })
  product?: ProductsEntity;

  @ManyToOne(() => SupplierEntity, (supplier) => supplier.supplierProduct)
  @JoinColumn({ name: 'supplier_id' })
  supplier?: SupplierEntity;
}
