import { MongoManager } from '@/infrastructure/mongodb-manager'
import 'dotenv/config'
import ServerCleanUpManager from 'infrastructure/server-cleanup-manager'
import ServerManager from 'infrastructure/server-manager'
import authRouter from 'routes/auth'
import locationRouter from 'routes/location'
import userRouter from 'routes/user'

const mongoose = new MongoManager()

mongoose.Run(process.env.MONGODB_URI)

const server = new ServerManager().createServer([authRouter, locationRouter, userRouter])

new ServerCleanUpManager().cleanup(server, mongoose)

