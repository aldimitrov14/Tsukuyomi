import { ObjectId } from 'mongoose'

import { CreateLocationType, UpdateLocationType } from '@/types/location'

import { Location } from '../models/location'

export class LocationService {
  async create(
    { name, description, menu, musicGenres, activities, atmosphere, reservations }: CreateLocationType){
    return new Location({ name, description, menu, musicGenres, activities, atmosphere, reservations }).save()
  }

  async update(
    { id, name, description, menu, musicGenres, activities, atmosphere, reservations }: UpdateLocationType){
    return Location.updateOne({ id: id },
      { $set:
        { name: name,
          description: description,
          menu: menu,
          musicGenres: musicGenres,
          activities: activities,
          atmosphere: atmosphere,
          reservations: reservations
        }
      })
  }

  async getById(locationID: ObjectId){
    return Location.findById(locationID)
  }

  async doesExistById(locationID: ObjectId) {
    return Location.exists({ locationID })
  }

  async deleteById(locationID: ObjectId) {
    return Location.deleteOne({ id: locationID })
  }
}
