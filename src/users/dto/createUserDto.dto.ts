import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'First name must be a string' })
  firstname: string;

  @IsString({ message: 'Last name must be a string' })
  lastname: string;

  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Email must be in a valid format' })
  email: string;
}
