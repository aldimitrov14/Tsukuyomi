import { LocationService } from '../services/location'
import { CreateLocationType } from '@/types/location'
import { ObjectId } from 'mongoose'
import logger from '../infrastructure/logger'

export class LocationController {
  userService: LocationService
  constructor(){
    this.userService = new LocationService()
  }

  async createLocation(data: CreateLocationType){
    try {
      logger.info(`Location-controller: Create Location with data: ${data}`)
      const location = await this.userService.create(data)
      return location
    } catch (error){
      logger.error(`Location-controller: error: ${error}`)
    }
  }

  async getById(id: ObjectId){
    try {
      logger.info(`Location-controller: Reading Location with ID: ${id}`)
      const data = await this.userService.getById(id)
      return data?.toJSON()
    } catch (error){
      logger.error(`Location-controller: error: ${error}`)
    }
  }
}