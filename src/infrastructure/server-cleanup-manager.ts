import { Server } from 'http'
import logger from './logger'
import gracefulShutdown from 'http-graceful-shutdown'
import { MongoManager } from '@/infrastructure/mongodb-manager'

class ServerCleanUpManager {
  private preShutdown = async (): Promise<void> => {
    logger.info('App is shutting down...')
  }

  private onShutdown = async (mongoose:MongoManager): Promise<void> => {
    mongoose.Stop()
  }

  private postShutdown = (): void => {
    logger.info('App has shut down...')
  }

  cleanup = (server: Server, mongoose: MongoManager): void => {

    const onShutdownWrapper = (signal: string | undefined): Promise<void> => {
      return this.onShutdown(mongoose);
    };

    gracefulShutdown(server,{
        preShutdown: this.preShutdown,
        onShutdown: onShutdownWrapper,
        finally: this.postShutdown
      })
  }
}


export default ServerCleanUpManager