import { Inject, Injectable, NotFoundException} from '@nestjs/common'
import { Model } from 'mongoose';
import { SignInDto, SignUpDto } from 'src/users/controllers/Auth/authdto';
import { Users } from 'src/users/interfaces/users.interfaces';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USERS_MODEL')
        private usersModel: Model<Users>,
      ) {}
      // SignIn 
      async SignIn(body: SignInDto) {
        const { email, password } = body;
    
        // Find the user by email
        const user = await this.usersModel.findOne({ email });
        
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new NotFoundException('Invalid Password');
        }
        return user;
    }
      // SignUp
      async SignUp(body: SignUpDto) {
        console.log(body);
        
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(body.password, saltOrRounds);
    
        // Replace the plain password with the hashed password
        body.password = hashedPassword;
        
        // Create the user with the hashed password
        const createUser = await this.usersModel.create(body);
        
        return createUser;
    }
}
