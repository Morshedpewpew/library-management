import { IsString, IsEmail } from "class-validator";

export class CreatePublisherDto{
    @IsString()
    name : string;
    @IsEmail()
    email: string;
   
}