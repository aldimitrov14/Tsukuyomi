import { connect, connection } from 'mongoose'
import logger from './logger'

export class MongoManager {
  public async Run(mongoUri: string): Promise<typeof import('mongoose') | undefined> {
    try {
      logger.info(`Conencting to database on ${mongoUri}...`)
      return await connect(mongoUri)
    } catch (error) {
      logger.error(error)
    }
  }
  public async Stop(): Promise<void> {
    try {
      logger.info('Closing database connection...')
      return await connection.destroy()
    } catch (error) {
      logger.error(error)
    }
  }
}