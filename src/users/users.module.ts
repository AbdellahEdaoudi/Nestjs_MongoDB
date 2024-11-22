import { Module } from '@nestjs/common';
import { UsersService } from './services/Admins/users.service';
import { UsersController } from './controllers/Admins/users.controller';
import { usersProviders } from './providers/users.providers';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UsersController],
  providers: [...usersProviders,UsersService]
})
export class UsersModule {}
