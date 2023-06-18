import { UserController } from '../controllers/userController'
import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

passport.use(
  new FacebookStrategy(
    {
      clientID: '260458576537526',
      clientSecret: 'c237bedc7fff51c51e9485e150e73c65',
      callbackURL: 'http://localhost:8000/auth/facebook/redirect',
      profileFields: ['id', 'emails', 'name']
    },
    async (accessToken, refreshToken, profile, done) => {
      const controller = new UserController()

      let data = await controller.getByEmail(profile._json.email)

      if (data == null){
        data = await controller.registerUserWithToken(profile._json.email, accessToken)
      }
      done(null, data?.toJSON())
    }
  )
)

passport.use(
  new GoogleStrategy(
    {
      clientID: '758708865419-d84fngqcfne19h83c3obd1mccpak67ec.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:8000/auth/google/redirect',
      scope: ['profile', 'email']
    },
    async (accessToken, refreshToken, profile, done) => {
      const controller = new UserController()

      if (profile._json.email != undefined){
        let data = await controller.getByEmail(profile._json.email)

        if (data == null){
          data = await controller.registerUserWithToken(profile._json.email, accessToken)
        }
        done(null, data?.toJSON())
      }
    }
  )
)

// Serialize user into the sessions
passport.serializeUser((user, done) => {
  done(null, user)
})

// Deserialize user from the sessions
passport.deserializeUser((user, done) => {
  if (user != undefined){
    done(null, user)
  }
})

export default passport
