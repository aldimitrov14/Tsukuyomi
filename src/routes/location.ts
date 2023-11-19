import express, { Request, Response } from 'express'
import { LocationController } from '../controllers/locationController'
import mongoose from 'mongoose'

const locationRouter = express.Router()

locationRouter.post('/location', async (req: Request, res: Response) => {
  if (req.user) {
    const controller = new LocationController()

    const data = await controller.createLocation(req.body)

    res.send(data?.toJSON())
  } else {
    res.redirect('/login')
  }
})

locationRouter.get('/location/:locationID', async (req: Request, res: Response) => {
  if (req.user) {
    const controller = new LocationController()

    const test = new mongoose.Types.ObjectId(req.params.locationID)

    const data = await controller.getById(test)

    res.send(data?.toJSON())
  } else {
    res.redirect('/login')
  }
})
export default locationRouter
