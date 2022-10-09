import { Transform } from "class-transformer";
import { IsString, IsEmail, IsInt } from "class-validator";

export class CreatePublisherDto{
    @IsString()
    name : string;
    @IsEmail()
    email: string;
    @Transform(({value}) => parseInt(value))
    @IsInt()
    author_id : number;
   
}