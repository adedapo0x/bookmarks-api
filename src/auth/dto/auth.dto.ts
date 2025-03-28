import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class signUpDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    lastName: string;
}

export class loginDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}