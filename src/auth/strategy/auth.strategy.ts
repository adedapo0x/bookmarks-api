import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(config: ConfigService, private prisma: PrismaService){
        const jwtSecret = config.get<string>('JWT_SECRET');
        if (!jwtSecret) {
            throw new Error('Missing JWT_SECRET in environment variables')
        }
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtSecret
        });
    }
    async validate(payload: {sub: string, email: string}) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: payload.sub
                }
            })
            if (!user){
                throw new UnauthorizedException("User not found!")
            }
            const { hashPassword, ...sanitizedUser } = user;
            return sanitizedUser;
        } catch (e){
            throw e;
        }        
    }
} 