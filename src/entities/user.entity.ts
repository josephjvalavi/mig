import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    age:number
    @Column()
    country:string
}