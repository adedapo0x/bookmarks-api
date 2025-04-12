import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class editUserDTO{
    @IsEmail()
    @IsOptional()
    email ?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    firstName ?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    lastName ?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    username ?: string;
}