import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID:number;
    @Column()
    name: string;
    
    @Column()
    books: string;
    @Column()
    email: string;
    
   

}
