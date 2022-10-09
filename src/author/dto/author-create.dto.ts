import { Transform, Type } from "class-transformer";
import { IsString, IsEmail, ValidateNested, IsInt } from "class-validator";
import { CreateBookDto } from "src/book/dto/book-create.dto";
import { Book } from "src/book/entity/book.entity";

export class CreateAuthorDto{
    @IsString()
    name : string;
    @IsEmail()
    email: string;
    @Transform(({value}) => parseInt(value))
    @IsInt()
    book_id : number;
    @IsInt()
    publisher_id : number;
   
    
    

}