import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {User} from './User';

@Entity()
export class Scope {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @OneToMany(type => User, user => user.scopeId)
    users!: User[];

}
