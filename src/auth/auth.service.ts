import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { loginDto, signUpDto } from "./dto";
import * as argon from "argon2"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";


@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){}
    async signup(dto: signUpDto){
        try {
        // generate password hash
        const hash = await argon.hash(dto.password);
        // save user in the DB 
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hashPassword: hash,
                firstName: dto.firstName,
                lastName: dto.lastName
            }
        })

        // want to get rid of hashed password in response (better way to do this to be implemented later)
        const {hashPassword, ...sanitizedUser} = user;
        // return sanitized user
        return sanitizedUser;   
            
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError){
                if (error.code === 'P2002'){
                    throw new ForbiddenException('Email already taken');
                }
            }
            throw error;
        }
        
    }

    async login(dto: loginDto){
        try{
            // Find the user by email
        } catch (error){

        }

    }
}