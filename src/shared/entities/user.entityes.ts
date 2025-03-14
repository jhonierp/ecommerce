import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

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
}
