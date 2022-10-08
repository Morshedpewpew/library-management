import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('publisher')
export class Publisher extends BaseEntity{
    @PrimaryGeneratedColumn()
    ID:number;
    @Column()
    name: string;
    @Column()
    email: string;
    
    

}
