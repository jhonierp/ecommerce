import { on } from 'events';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  Or,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { InventoryHistoryEntity } from './inventoryHistory.entity';
import { SupplierProductEntity } from './supplierProduct.entity';
import { ShoppingCartEntity } from './shoppingCart.entity';
import { ReturnEntity } from './return.entity';
import { OrderDetailsEntity } from './orderDetails.entity';
import { DiscountEntity } from './discount.entity';
import { ReviewEntity } from './review.entity';
import { SubcategoryEntity } from './subcategory.entity';

@Entity('product')
export class ProductsEntity {
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
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @OneToMany(
    () => InventoryHistoryEntity,
    (inventoryHistory) => inventoryHistory.product,
  )
  inventoryHistory?: InventoryHistoryEntity[];

  @OneToMany(
    () => SupplierProductEntity,
    (supplierProduct) => supplierProduct.product,
  )
  supplierProduct?: SupplierProductEntity[];

  @OneToMany(() => ShoppingCartEntity, (shoppingCart) => shoppingCart.product)
  shoppingCart?: ShoppingCartEntity[];

  @OneToMany(() => ReturnEntity, (returnEntity) => returnEntity.product)
  returns?: ReturnEntity[];

  @OneToMany(() => OrderDetailsEntity, (orderDetails) => orderDetails.product)
  orderDetails?: OrderDetailsEntity[];

  @OneToMany(() => DiscountEntity, (discount) => discount.product)
  discounts?: DiscountEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.product)
  reviews?: ReviewEntity[];

  @ManyToOne(() => SubcategoryEntity, (subcategory) => subcategory.product)
  @JoinColumn({ name: 'subcategory_id' })
  subcategory?: SubcategoryEntity;
}
