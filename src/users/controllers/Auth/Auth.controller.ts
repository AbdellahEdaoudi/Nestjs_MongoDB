import {Controller, Post, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/roles.decorator';
import { UsersGuard } from 'src/guards/users.guard';
import { AuthService } from 'src/users/services/Auth/ResetPassword/Auth.service';


// SignIN Controller
@Controller('sign_in')
@UseGuards(UsersGuard)
export class AuthSignINController {
    constructor (private readonly authService:AuthService){}

    @Post()
    @Roles(["admin","user","manager"])
    SignIn(){
        return this.authService.SignIn()
    }
    
}

// SignUp Controller
@Controller('sign_up')
@UseGuards(UsersGuard)
export class AuthSignUpController {
    constructor (private readonly authService:AuthService){}

    @Post()
    @Roles(["admin","user","manager"])
    SignIn(){
        return this.authService.SignUp()
    }
    
}
