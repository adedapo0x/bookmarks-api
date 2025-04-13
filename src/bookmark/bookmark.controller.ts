import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorators';
import { JwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDTO } from './dto';
import { EditBookmarkDTO } from './dto/edit-bookmark.dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService){}

    @Post()
    createBookmarks(@GetUser('id') userId: string, @Body() dto: CreateBookmarkDTO){
        return this.bookmarkService.createBookmarks(userId, dto);
     }

    @Get()
    getBookmarks(@GetUser('id') userId: string){
        return this.bookmarkService.getBookmarks(userId);
    }

    @Get(':id')
    getBookmarksById(@GetUser('id') userId: string, @Param('id') bookmarkID: string){
        return this.bookmarkService.getBookmarksById(userId, bookmarkID);
    }

    @Patch(':id')
    editBookmarkById(@GetUser('id') userId: string, @Param('id') bookmarkID: string, @Body() dto: EditBookmarkDTO){
        return this.bookmarkService.editBookmarkById(userId, bookmarkID, dto);
    }

    @Delete(':id')
    deleteBookmarkById(@GetUser('id') userId: string, @Param('id') bookmarkID: string){
        return this.bookmarkService.deleteBookmarkById(userId, bookmarkID);
    }
}
