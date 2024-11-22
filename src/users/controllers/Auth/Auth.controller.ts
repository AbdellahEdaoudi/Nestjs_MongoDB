import {Body, Controller, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { Roles } from 'src/guards/roles.decorator';
import { AuthService } from 'src/users/services/Auth/ResetPassword/Auth.service';
import { SignInDto } from './authdto';


// SignIN Controller
@Controller('sign_in')
export class AuthSignINController {
    constructor (private readonly authService:AuthService){}

    @Post()
    @Roles(["admin","user","manager"])
    SignIn(@Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true})) body:SignInDto ){
        return this.authService.SignIn(body)
    }
    
}

// SignUp Controller
@Controller('sign_up')
export class AuthSignUpController {
    constructor (private readonly authService:AuthService){}

    @Post()
    @Roles(["admin","user","manager"])
    SignIn(){
        return this.authService.SignUp()
    }
    
}
