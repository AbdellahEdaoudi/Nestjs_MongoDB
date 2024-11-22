import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  firstname : String,
  lastname : String,
  email : String,
  password : String,
  role : String
});