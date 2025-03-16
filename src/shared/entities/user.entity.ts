import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  Or,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { ShoppingCartEntity } from './shoppingCart.entity';
import { OrderEntity } from './order.entity';
import { ReviewEntity } from './review.entity';
import { UserTypesEntity } from './userTypes.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  name: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  name2: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  last_name: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  last_name2: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  email: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  password: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  phone: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  address: string;

  @Column('bigint', {
    nullable: false,
  })
  User_type_id: number;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @DeleteDateColumn()
  deleted_at: Timestamp;

  @OneToMany(() => ShoppingCartEntity, (shoppingCart) => shoppingCart.user)
  shoppingCart?: ShoppingCartEntity[];

  @OneToMany(() => OrderEntity, (order) => order.user)
  order?: OrderEntity[];

  @OneToMany(() => ReviewEntity, (review) => review.user)
  reviews?: ReviewEntity[];

  @ManyToOne(() => UserTypesEntity, (userType) => userType.users)
  @JoinColumn({ name: 'User_type_id' })
  userType?: UserTypesEntity;
}
