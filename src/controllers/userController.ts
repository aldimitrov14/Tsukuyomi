import { UserService } from '../services/user'
import { CreateUserCredentialsType, CreateUserType } from '../types/user'
import logger from '../infrastructure/logger'

export class UserController {
  userService: UserService
  constructor(){
    this.userService = new UserService()
  }

  async registerUserWithToken(data: CreateUserType){
    try {
      logger.info(`User-controller: Create User with data: ${data}`)
      const user = await this.userService.createWithToken(data)
      return user
    } catch (error){
      logger.error(`User-controller: error: ${error}`)
    }
  }

  async registerUserWithCredentials(data: CreateUserCredentialsType){
    try {
      logger.info(`User-controller: Create User with data: ${data}`)
      const user = await this.userService.createWithCredentials(data)
      return user
    } catch (error){
      logger.error(`User-controller: error: ${error}`)
    }
  }

  async getByEmail(email: string){
    try {
      logger.info(`User-controller: Read user with email: ${email}`)
      return await this.userService.getByEmail(email)
    } catch (error){
      logger.error(`User-controller: error: ${error}`)
    }
  }
}