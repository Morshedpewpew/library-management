import { IsString, IsEmail } from "class-validator";

export class UpdatePublisherDto{
    @IsString()
    name : string;
    @IsEmail()
    email: string;
   
}