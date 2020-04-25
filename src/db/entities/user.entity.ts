import {Entity, PrimaryColumn, Column, BaseEntity} from "typeorm";

@Entity({name: 'user'})
export class UserEntity extends BaseEntity {

}
