import mongoose from 'mongoose'

import { CreateUserCredentialsType, CreateUserType } from '../types/user'

import { User } from '../models/user'

export class UserService {
  async createWithToken({ email, token }: CreateUserType){
    return new User({ email, token }).save()
  }

  async createWithCredentials({ email, password }: CreateUserCredentialsType){
    return new User({ email, password }).save()
  }

  async getById(userID: mongoose.Types.ObjectId){
    return User.findById(userID)
  }

  async getByEmail(email: string){
    return User.findOne({ email })
  }

  async doesExistByEmail(email: string) {
    return User.exists({ email })
  }

  async deleteById(userID: mongoose.Types.ObjectId) {
    return User.deleteOne({ id: userID })
  }
}
