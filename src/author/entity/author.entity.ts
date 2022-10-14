import { Book } from "src/book/entity/book.entity";
import { Publisher } from "src/publisher/entity/publisher.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('author')

export class Author extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID:number;
    @Column({unique:true})
    name: string;
    @Column()
    email: string;
    @ManyToMany(()=>Book, (book)=>book.authors) 
    books:Book[] 
   
     

}