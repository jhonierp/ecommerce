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
import { ReturnEntity } from './return.entity';
import { PaymentsEntity } from './payments.entity';

@Entity('stayPayReturn')
export class StayPayReturnEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id?: number;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  description: string;

  @CreateDateColumn()
  createdAt?: Timestamp;

  @UpdateDateColumn()
  updatedAt?: Timestamp;

  @DeleteDateColumn()
  deletedAt?: Timestamp;

  @OneToMany(() => ReturnEntity, (returnEntity) => returnEntity.state)
  returns?: ReturnEntity[];

  @OneToMany(() => PaymentsEntity, (payment) => payment.status)
  payments?: PaymentsEntity[];
}
