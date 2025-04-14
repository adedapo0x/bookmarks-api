import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { editUserDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

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
