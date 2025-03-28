import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2"


@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){}
    async signup(dto: AuthDto){
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
    }

    login(){
        return {msg: "I have logged in"}
    }
}