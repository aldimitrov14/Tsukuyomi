import { LocationService } from '../services/location'
import { CreateLocationType } from '@/types/location'
import mongoose from 'mongoose'
import logger from '../infrastructure/logger'

export class LocationController {
  locationService: LocationService
  constructor(){
    this.locationService = new LocationService()
  }

  async createLocation(data: CreateLocationType){
    try {
      logger.info(`Location-controller: Create Location with data: ${data}`)
      const location = await this.locationService.create(data)
      return location
    } catch (error){
      logger.error(`Location-controller: error: ${error}`)
    }
  }

  async getById(id: mongoose.Types.ObjectId){
    try {
      logger.info(`Location-controller: Reading Location with ID: ${id}`)
      const data = await this.locationService.getById(id)
      return data
    } catch (error){
      logger.error(`Location-controller: error: ${error}`)
    }
  }
}