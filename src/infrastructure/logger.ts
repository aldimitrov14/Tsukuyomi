import winston from 'winston'
import 'dotenv/config'

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.cli()
  ),
  transports: [
    new winston.transports.File({ filename: process.env.API_LOG_FILENAME }),
    new winston.transports.Console()
  ],
});

export default logger