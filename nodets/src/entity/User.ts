import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Scope} from './Scope';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column()
    name!: string;

    @Column({
        select: false
    })
    password!: string;

    @Column()
    email!: string;

    @Column({
      default: 2, 
      select: false
    })
    scopeId!: number;

    @ManyToOne(type => Scope, scope => scope.users)
    scope!: Scope;

}
