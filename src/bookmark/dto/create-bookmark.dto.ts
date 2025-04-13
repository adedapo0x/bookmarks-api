import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateBookmarkDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description ?: string;

    @IsString()
    @IsNotEmpty()
    link: string;
}