import { Body, Controller, Delete, Get, Param, Patch, Post, Put, ValidationPipe } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/createUserDto.dto';
import { updateUserDto } from '../dto/updateUserDto.dto';
import { Roles } from 'src/guards/Roles.decorator';

@Controller('users')
export class UsersController {
    constructor (private readonly usersService:UsersService){}
    // Get All Users
    @Roles(["admin","manager"])
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
    @Roles(["user"])
    @Post()
    createUser(@Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true})) 
    body:CreateUserDto ) {
        return this.usersService.createUser(body)
    }
    // Patch or Put
    @Patch(":id")
    UpdateUser(
        @Param("id") id:string ,
        @Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true})) 
        body:updateUserDto){
            return this.usersService.UpdateUser(id,body)
    }

    // Delete By id
    @Delete(":id")
    DeleteUser(@Param("id") id:string){
            return this.usersService.DeleteUser(id)
    }
    
}
