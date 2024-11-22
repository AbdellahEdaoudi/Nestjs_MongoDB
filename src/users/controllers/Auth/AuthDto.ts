import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class SignInDto {
    @IsString({message:"email must be a string"})
    @IsEmail({},{message:"email must be a valid email"})
    email:string;
    @IsString({message:"password must be a string"})
    @MinLength(5,{message:"password must be a laste 5 characters"})
    @MaxLength(20,{message:"password must be a less than 20 characters"})
    password:string;

}