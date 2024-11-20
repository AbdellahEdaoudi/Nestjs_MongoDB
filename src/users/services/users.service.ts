import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Users } from '../interfaces/users.interfaces';
import { NotFoundError } from 'rxjs';
import { CreateUserDto } from '../dto/createUserDto.dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_MODEL')
        private usersModel: Model<Users>,
      ) {}
      //  Get 
      async getAllUsers():Promise<{data:Users[];count:number;status:number} >{
        const user = await  this.usersModel.find().select('-_id firstname lastname')
        return {data : user , count:user.length , status:200}
      }
      // Get By Id
      async getUserById(userId:string):Promise<Users>{
         const user = await this.usersModel.findById(userId)
         if (!user) {
          throw new NotFoundException();
         }
         return user ;
      }
      // Post
      async createUser(body:CreateUserDto):Promise<Users>{
        const user = await this.usersModel.create(body)
        return user
     }
}
