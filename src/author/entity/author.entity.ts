import { Book } from "src/book/entity/book.entity";
import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('author')
export class Author extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID:number;
    @Column()
    name: string;
    @Column()
    email: string;
    @ManyToMany(()=>Book, (book)=>book.authors) 
    books:Book[]   
    
    

}