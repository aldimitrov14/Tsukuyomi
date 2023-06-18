import express, { Request, Response } from 'express'
import passport from '../auth/strategies'

const router = express.Router()

router.get('/auth/facebook', passport.authenticate('facebook'))
router.get('/auth/google', passport.authenticate('google'))

router.get('/auth/facebook/redirect', passport.authenticate('facebook', { failureRedirect: '/login', failureMessage: true }),
  (req, res) => {
    res.redirect('/profile')
  })

router.get('/auth/google/redirect', passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }),
  (req: Request, res: Response) => {
    res.redirect('/profile')
  }
)

router.get('/profile', (req: Request, res: Response) => {
  if (req.user) {
    res.send(req.user)
  } else {
    res.redirect('/login')
  }
})

// Logout route
router.get('/logout', (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  req.logout(done => { })
  res.redirect('/')
})

export default router
