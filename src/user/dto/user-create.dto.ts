import { Transform } from "class-transformer";
import { IsString, IsEmail, IsInt, IsArray } from "class-validator";

export class CreateUserDto{
    @IsString()
    name : string;
    @IsEmail()
    email: string;
    @IsString()
    location : string;
    @Transform(({value}) => parseInt(value))
    @IsInt()
    category_id : number;
    // @IsArray()
    // category_id: number[];
   

}