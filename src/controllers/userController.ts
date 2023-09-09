import { UserService } from '../services/user'
import { CreateUserType } from '../types/user'
import winston from 'winston'

export class UserController {
  userService: UserService
  constructor(){
    this.userService = new UserService()
  }

  async registerUserWithToken(data: CreateUserType){
    try {
      const user = await this.userService.createWithToken(
        data
      )
      return user
    } catch (error){
      winston.error(error)
    }
  }

  async getByEmail(email: string){
    try {
      return await this.userService.getByEmail(email)
    } catch (error){
      winston.error(error)
    }
  }
}