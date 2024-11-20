import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/createUserDto.dto';

@Controller('users')
export class UsersController {
    constructor (private readonly usersService:UsersService){}
    // Get All Users
    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers()
    }
    // Get User By id
    @Get(":userid")
    getUserById(@Param("userid") userId:string) {
        return this.usersService.getUserById(userId)
    }

    // Post User
    @Post()
    createUser(@Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true})) 
    body:CreateUserDto ) {
        return this.usersService.createUser(body)
    }
    
}
