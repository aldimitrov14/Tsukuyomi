import express, { Request, Response } from 'express'
import passport from '../auth/strategies'
import { UserController } from '@/controllers/userController'
import { CreateUserCredentialsType } from '@/types/user'

const authRouter = express.Router()

authRouter.get('/auth/facebook', passport.authenticate('facebook'))
authRouter.get('/auth/google', passport.authenticate('google'))

authRouter.get('/auth/facebook/redirect', passport.authenticate('facebook', { failureRedirect: '/login', failureMessage: true }),
  (req: Request, res: Response) => {
    res.redirect('/profile')
  })

authRouter.get('/auth/google/redirect', passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }),
  (req: Request, res: Response) => {
    res.redirect('/profile')
  }
)

authRouter.post('/login', passport.authenticate('basic', { failureRedirect: '/login', failureMessage: true }),
  (req: Request, res: Response) => {
    res.redirect('/profile')
  }
)

authRouter.post('/register',
  async (req: Request, res: Response) => {
    const controller = new UserController()

    const body:CreateUserCredentialsType = req.body

    const data = await controller.registerUserWithCredentials({ email: body.email, password: body.password })

    res.send(data)
  }
)

export default authRouter
