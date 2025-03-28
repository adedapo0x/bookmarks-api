import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class AuthDto {
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