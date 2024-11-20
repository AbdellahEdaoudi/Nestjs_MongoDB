import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../services/users.service';

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
    
}
