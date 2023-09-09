import express, { Request, Response } from 'express'
import { LocationController } from '../controllers/locationController'

const locationRouter = express.Router()

locationRouter.post('/location', async (req: Request, res: Response) => {
  if (req.user) {
    const controller = new LocationController()

    const data = await controller.createLocation(req.body)

    res.send(data?.toJSON)
  } else {
    res.redirect('/login')
  }
})

export default locationRouter
