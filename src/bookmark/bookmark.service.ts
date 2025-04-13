import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookmarkDTO } from './dto';
import { EditBookmarkDTO } from './dto/edit-bookmark.dto';

@Injectable()
export class BookmarkService {
    constructor(private prisma: PrismaService){}

    async createBookmarks(userId: string, dto: CreateBookmarkDTO){
        const bookmark = await this.prisma.bookmark.create({
            data: {
                userId,
                ...dto
            }
        })
        return bookmark;
    }

    async getBookmarks(userId: string){
        return this.prisma.bookmark.findMany({
            where: {
                userId
            }
        })
    }

    getBookmarksById(userId: string, bookmarkID: string){}

    editBookmarkById(userId: string, bookmarkID: string, dto: EditBookmarkDTO){}

    deleteBookmarkById(userId: string, bookmarkID: string){}
}
