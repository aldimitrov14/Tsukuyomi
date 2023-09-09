import { Schema, model } from 'mongoose'
import { ILocation, LocationModel } from '../types/location'

const schema = new Schema<ILocation, LocationModel>(
  {
    name: String,
    rating: Number,
    menu: [String],
    musicGenres: [String],
    activities: [String],
    atmosphere: [String],
    events: [{
      name: String,
      datefrom: Date,
      dateto: Date,
      description: String
    }],
    reservations: Boolean
  },
  { timestamps: true }
)

schema.methods.toJSON = function () {
  return this.toObject()
}

export const Location = model<ILocation, LocationModel>('Location', schema)

