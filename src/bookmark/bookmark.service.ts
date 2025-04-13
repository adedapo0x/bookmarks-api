import { ForbiddenException, Injectable } from '@nestjs/common';
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

    async getBookmarksById(userId: string, bookmarkID: string){
        return this.prisma.bookmark.findFirst({
            where: {
                id: bookmarkID,
                userId
            }
        })
    }

    async editBookmarkById(userId: string, bookmarkID: string, dto: EditBookmarkDTO){
        const bookmark = await this.prisma.bookmark.findUnique({
            where: {
                id: bookmarkID
            }
        })
        if (!bookmark || bookmark.userId !== userId){
            throw new ForbiddenException("Access to resources denied")
        }
        return this.prisma.bookmark.update({
            where: {
                id: bookmarkID
            },
            data: {
                ...dto
            }
        })
    }

    async deleteBookmarkById(userId: string, bookmarkID: string){
        const bookmark = await this.prisma.bookmark.findUnique({
            where: {
                id: bookmarkID
            }
        })
        if (!bookmark || bookmark.userId !== userId){
            throw new ForbiddenException("Access to resources denied")
        }
        await this.prisma.bookmark.delete({
            where: {
                id: bookmarkID,
                userId
            }
        })
    }
}
