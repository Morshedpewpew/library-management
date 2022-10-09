import { Category } from "src/category/entity/category.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID:number;
    @Column()
    name: string;
    
    @Column()
    location: string;
    @Column()
    email: string;
    @ManyToMany(()=>Category, (category)=>category.users) 
    @JoinTable()
    categories:Category[] 
    

}
