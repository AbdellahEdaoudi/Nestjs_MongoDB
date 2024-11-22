import { Inject, Injectable} from '@nestjs/common'
import { Model } from 'mongoose';
import { Users } from 'src/users/interfaces/users.interfaces';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USERS_MODEL')
        private usersModel: Model<Users>,
      ) {}
      // Post
      SignIn(){}
      SignUp(){}
}
