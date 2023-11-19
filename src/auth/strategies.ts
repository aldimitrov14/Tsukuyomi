import { UserController } from '../controllers/userController'
import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { BasicStrategy as BasicStrategy } from 'passport-http'
import 'dotenv/config'
import logger from '../infrastructure/logger'

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: 'http://localhost:8000/auth/facebook/redirect',
      profileFields: ['id', 'emails', 'name']
    },
    async (accessToken, refreshToken, profile, done) => {
      logger.info('Authenticating with Facebook:...')

      const controller = new UserController()

      let data = await controller.getByEmail(profile._json.email)

      if (data == null){
        data = await controller.registerUserWithToken({ email: profile._json.email, token: accessToken })
      }
      done(null, data?.toJSON())
    }
  )
)

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8000/auth/google/redirect',
      scope: ['profile', 'email']
    },
    async (accessToken, refreshToken, profile, done) => {
      logger.info('Authenticating with Google:...')

      const controller = new UserController()

      if (profile._json.email != undefined){
        let data = await controller.getByEmail(profile._json.email)

        if (data == null){
          data = await controller.registerUserWithToken({ email: profile._json.email, token: accessToken })
        }
        done(null, data?.toJSON())
      }
    }
  )
)

passport.use(
  new BasicStrategy(
    async (username, password, done) => {
      logger.info('Authenticating with Credentials:...')

      const controller = new UserController()

      const data = await controller.getByEmail(username)

      done(null, data?.toJSON())
    }
  ))

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  if (user != undefined){
    done(null, user)
  }
})

export default passport
