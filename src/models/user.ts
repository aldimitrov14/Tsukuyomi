import { Schema, model } from 'mongoose'
import { IUser, UserModel } from '../types/user'

const schema = new Schema<IUser, UserModel>(
  {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    token: String
  },
  { timestamps: true }
)

schema.methods.toJSON = function () {
  const obj = this.toObject()

  delete obj.password
  delete obj.token
  return obj
}

export const User = model<IUser, UserModel>('User', schema)

