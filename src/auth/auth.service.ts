import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon"


@Injectable()
export class AuthService{
    constructor(private prisma: PrismaService){}
    async signup(dto: AuthDto){
        // generate password hash
        const hash = await argon.hash(dto.password);
        // save user in the DB

        // return user
    }

    login(){
        return {msg: "I have logged in"}
    }
}