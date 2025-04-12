import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorators';
import { JwtGuard } from '../auth/guard';
import { editUserDTO } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
    constructor(private userService: UserService){}
    @Get('me')
    getMe(@GetUser() user: User){
        return user
    }
    
    @Patch('edit')
    editUser(@GetUser('id') userID: string ,@Body() editUserDto: editUserDTO){
        return this.userService.editUser(userID, editUserDto);
    }
}
