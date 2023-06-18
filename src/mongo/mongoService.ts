import { connect, connection } from 'mongoose'
import winston from 'winston'

export class Mongoose {
  public async Run(): Promise<typeof import('mongoose') | undefined> {
    try {
      return await connect('mongodb://localhost:27017')
    } catch (error) {
      winston.error(error)
    }
  }
  public async Stop(): Promise<void> {
    try {
      return await connection.destroy()
    } catch (error) {
      winston.error(error)
    }
  }
}