import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

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
}
