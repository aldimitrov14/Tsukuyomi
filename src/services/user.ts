import { ClientSession, ObjectId } from 'mongoose'

import { User } from '../models/user'

export class UserService {
  async createWithToken(
    {
      email,
      token
    }: {
      email: string
      token: string,
    },
    session?: ClientSession
  ){
    return new User({
      email,
      token
    }).save({ session })
  }

  async getById(userID: ObjectId){ return User.findById(userID) }

  async getByEmail(email: string){ return User.findOne({ email }) }

  async isExistByEmail(email: string) { return User.exists({ email }) }

  async deleteById(userId: ObjectId) { return User.deleteOne({ user: userId }) }
}
