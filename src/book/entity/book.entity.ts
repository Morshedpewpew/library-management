import { Author } from "src/author/entity/author.entity";
import { Category } from "src/category/entity/category.entity";
import { Publisher } from "src/publisher/entity/publisher.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('book')
export class Book extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID:number;
    @Column()
    name: string;
    @ManyToOne(()=> Category, (category)=> category.books)
    category: Category
    @ManyToMany(()=> Author, (author)=>author.books)
    @JoinTable()
    authors : Author[]
    @ManyToOne(()=> Publisher, (publisher)=> publisher.books)
    publisher: Publisher
    
    
    

}