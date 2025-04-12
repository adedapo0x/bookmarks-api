import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { StringifyOptions } from 'querystring';
import { editUserDTO } from './dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaClient){}

    async editUser(userID: string, dto: editUserDTO){
        const user = await this.prisma.user.update({
            where: {
                id: userID
            }, 
            data: {
                ...dto,
            }
        })
        const {hashPassword, ...sanitizedUser } = user;
        return sanitizedUser; 
    }
}
