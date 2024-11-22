import { Inject, Injectable, NotFoundException} from '@nestjs/common'
import { Model } from 'mongoose';
import { SignInDto, SignUpDto } from 'src/users/controllers/Auth/authdto';
import { Users } from 'src/users/interfaces/users.interfaces';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USERS_MODEL')
        private usersModel: Model<Users>,
      ) {}
      // Post
      async SignIn(body:SignInDto){
        const {email,password} = body;
        const user = await this.usersModel.findOne({email,password});
        if (!user) {
          throw new NotFoundException()
        }
        return user;
      }
      async SignUp(body:SignUpDto){
        console.log(body);
        
        const createuser  = await this.usersModel.create(body);
        return createuser ; 
      }
}
