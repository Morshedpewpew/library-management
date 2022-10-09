import { Author } from "src/author/entity/author.entity";
import { Book } from "src/book/entity/book.entity";
import { BaseEntity, Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('publisher')
export class Publisher extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID:number;
    @Column()
    name: string;
    @Column()
    email: string;
    @OneToMany(()=> Book,(book)=>book.publisher)
    books: Book[]
    @ManyToMany(()=>Author, (author)=>author.publishers) 
    authors:Author[] 
    

}
