import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID:number;
    @Column()
    name: string;
   
    
    

}
