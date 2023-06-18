import { Response } from 'express'
import { startSession } from 'mongoose'
import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { UserService } from '@/services/user'
import winston from 'winston'

export class UserController {
  userService: UserService
  constructor(){
    this.userService = new UserService()
  }

  async registerUserWithToken(email: string, token: string){
    try {
      const session = await startSession()
      session.startTransaction()

      const user = await this.userService.createWithToken(
        {
          email,
          token
        },
        session
      )

      await session.commitTransaction()
      session.endSession()

      return user
    } catch (error){
      winston.error(error)
    }
  }

  async getByEmail(email: string){
    try {
      const data = await this.userService.getByEmail(email)
      return data
    } catch (error){
      winston.error(error)
    }
  }
}