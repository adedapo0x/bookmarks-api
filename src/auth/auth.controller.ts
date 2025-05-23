import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { loginDto, signUpDto } from "./dto";

@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post("signup")
    signup(@Body() dto: signUpDto){ 
        return this.authService.signup(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post("login")
    login(@Body() dto: loginDto){
        return this.authService.login(dto);
    }
}