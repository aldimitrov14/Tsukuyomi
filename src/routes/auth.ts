import express, { Request, Response } from 'express'
import passport from '../auth/strategies'

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

export default authRouter
