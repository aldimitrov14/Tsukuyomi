import { UserService } from '../services/user'
import { CreateUserType } from '../types/user'
import logger from '../infrastructure/logger'

export class UserController {
  userService: UserService
  constructor(){
    this.userService = new UserService()
  }

  async registerUserWithToken(data: CreateUserType){
    try {
      logger.info(`User-controller: Create Location with data: ${data}`)
      const user = await this.userService.createWithToken(
        data
      )
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