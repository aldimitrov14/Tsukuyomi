import express from 'express'
import authRouter from 'routes/auth'
import { Mongoose } from 'mongo/mongoService'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import passport from './auth/strategies'
import locationRouter from './routes/location'

const app = express()

new Mongoose().Run()

app.use(
  session({
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017' }),
    resave: false,
    saveUninitialized: true,
    secret: 'test123'
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use('/', authRouter)
app.use('/', locationRouter)

const port = 8000
app.listen(port)