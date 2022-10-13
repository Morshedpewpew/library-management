import { Book } from "src/book/entity/book.entity";
import { User } from "src/user/entities/user.entity";
import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID:number;
    @Column()
    name: string; 
    @OneToMany(()=> Book,(book)=>book.category)
    books: Book[]
    @ManyToMany(()=>User, (user)=>user.categories,{onUpdate:'CASCADE'}) 
    users: User[] 
   
    
   
    
    

}
