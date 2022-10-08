import { IsString, IsEmail } from "class-validator";

export class UpdateAuthorDto{
    @IsString()
    name : string;
    @IsEmail()
    email: string;
   

}