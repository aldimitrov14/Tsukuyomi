import { ObjectId } from 'mongoose'

import { CreateUserType } from '../types/user'

import { User } from '../models/user'

export class UserService {
  async createWithToken({ email, token }: CreateUserType){
    return new User({ email, token }).save()
  }

  async getById(userID: ObjectId){
    return User.findById(userID)
  }

  async getByEmail(email: string){
    return User.findOne({ email })
  }

  async doesExistByEmail(email: string) {
    return User.exists({ email })
  }

  async deleteById(userID: ObjectId) {
    return User.deleteOne({ id: userID })
  }
}
