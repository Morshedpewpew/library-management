import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
   @PrimaryGeneratedColumn()
   ID:number;
   @Column()
   name: string;
   
   @Column()
   Book: string;
   @Column()
   email: string;

}
