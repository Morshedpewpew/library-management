import { Transform } from "class-transformer";
import { IsArray } from "class-validator";

export class CategoryAddDto{
   
    @IsArray()
    category_id: number[];
}