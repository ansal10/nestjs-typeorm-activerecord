import {Entity, PrimaryColumn, Column, BaseEntity} from "typeorm";
import { TableName } from '../TableName';

@Entity({name: TableName.User})
export class UserEntity extends BaseEntity {

  @PrimaryColumn()
  id: number

  @Column()
  email: string;

  @Column({name: 'full_name'})
  fullName: string;
}
