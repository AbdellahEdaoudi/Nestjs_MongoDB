import { Module } from '@nestjs/common';
import { UsersService } from './services/Admins/users.service';
import { UsersController } from './controllers/Admins/users.controller';
import { usersProviders } from './providers/users.providers';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthSignINController, AuthSignUpController } from './controllers/Auth/Auth.controller';
import { AuthService } from './services/Auth/ResetPassword/Auth.service';

@Module({
  imports: [DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7200s' },
    })
  ],
  controllers: [UsersController,AuthSignINController,AuthSignUpController],
  providers: [...usersProviders,UsersService,AuthService]
})
export class UsersModule {}
