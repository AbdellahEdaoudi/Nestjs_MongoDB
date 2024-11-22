
import { Document } from 'mongoose';

export interface Users extends Document {
  readonly firstname: string;
  readonly lastname: number;
  readonly email: string;
  readonly password: string;
}
