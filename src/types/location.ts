import { Model, ObjectId } from 'mongoose'

export interface ILocation {
  id: ObjectId
  name: string
  description: string,
  rating: number
  menu: [string]
  musicGenres: [string]
  activities: [string]
  atmosphere: [string]
  events: [{
    name: string,
    datefrom: Date,
    dateto: Date,
    description: string,
  }]
  reservations: boolean
}

export type LocationModel = Model<ILocation, unknown, unknown>

export type AddEventToLocationType = {
    id: ObjectId,
    event: {
      name: string,
      datefrom: Date,
      dateto: Date,
      description: string,
    }
}

export type CreateLocationType = {
  name: string,
  description: string,
  menu: [string],
  musicGenres: [string],
  activities: [string],
  atmosphere: [string],
  reservations: boolean,
}

export type UpdateLocationType = {
  id: ObjectId
  name: string,
  description: string,
  menu: [string],
  musicGenres: [string],
  activities: [string],
  atmosphere: [string],
  reservations: boolean,
}
