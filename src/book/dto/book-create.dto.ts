import { Transform } from "class-transformer";
import { IsInt, IsString } from "class-validator";

export class CreateBookDto{
    @IsString()
    name : string;
    
    @Transform(({value}) => parseInt(value))
    @IsInt()
    category_id : number;
    

}