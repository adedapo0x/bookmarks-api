import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class EditBookmarkDTO {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @IsOptional()
    title?: string;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description ?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    link?: string;
}