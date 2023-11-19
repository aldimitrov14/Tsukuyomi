import express, { Router } from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import passport from '../auth/strategies'
import 'dotenv/config'
import logger from '../infrastructure/logger'
import { Express } from 'express-serve-static-core'
import { Server, IncomingMessage, ServerResponse } from 'http'

class ServerManager {
  app: Express

  constructor(){
    this.app = express()
  }
  createServer(routes: Array<Router>): Server<typeof IncomingMessage, typeof ServerResponse>{
    this.addSession()

    this.addPassport()

    this.addJSONCapabiltiies()

    this.createRoutes(routes)

    return this.startServer()
  }

  private addJSONCapabiltiies() {
    logger.info('Setting up JSON Capabilities')
    this.app.use(express.json())
  }

  private startServer() {
    const port = process.env.APP_PORT

    const server = this.app.listen(port, () => {
      logger.info(`App started and listening to port: ${port}...`)
    })
    return server
  }

  private createRoutes(routes: express.Router[]) {
    logger.info('Creating routes...')
    this.app.use('/', routes)
  }

  private addPassport() {
    logger.info('Setting up authentications...')
    this.app.use(passport.initialize())
    this.app.use(passport.session())
  }

  private addSession() {
    logger.info('Setting up session...')
    this.app.use(session({
      store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
      resave: false,
      saveUninitialized: true,
      secret: process.env.COOKIE_SECRET
    }))
  }
}

export default ServerManager