import { LocationService } from '../services/location'
import winston from 'winston'
import { CreateLocationType } from '@/types/location'
import { ObjectId } from 'mongoose'

export class LocationController {
  userService: LocationService
  constructor(){
    this.userService = new LocationService()
  }

  async createLocation(data: CreateLocationType){
    try {
      const user = await this.userService.create(
        data
      )
      return user
    } catch (error){
      winston.error(error)
    }
  }

  async getById(id: ObjectId){
    try {
      const data = await this.userService.getById(id)
      return data?.toJSON()
    } catch (error){
      winston.error(error)
    }
  }
}