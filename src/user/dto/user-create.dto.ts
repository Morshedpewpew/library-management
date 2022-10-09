import { Transform } from "class-transformer";
import { IsString, IsEmail, IsInt } from "class-validator";

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
   

}