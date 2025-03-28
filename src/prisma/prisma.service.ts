import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(config){
        super({
            datasources: {
                db: {
                    url: "postgresql://postgres:123@localhost:5434/bookmarkDB?schema=public"
                }
            }
        })
    }
}