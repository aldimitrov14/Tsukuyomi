import express, { Request, Response } from 'express'

const userRouter = express.Router()

userRouter.get('/profile', (req: Request, res: Response) => {
    if (req.user) {
      res.send(req.user)
    } else {
      res.redirect('/login')
    }
  })
  
userRouter.get('/logout', (req: Request, res: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    req.logout(done => { })
    res.redirect('/')
  })

export default userRouter