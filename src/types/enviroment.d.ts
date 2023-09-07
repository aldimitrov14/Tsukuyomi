declare global {
    namespace NodeJS {
      interface ProcessEnv {
        APP_URL: string,
        MONGODB_URI: string,
        MAIL_HOST: string,
        MAIL_PORT: string,
        MAIL_USER: string,
        MAIL_PASSWORD: string,
        MAIL_TPL_PATH: string,
        API_LOG_FILENAME: string,
        FACEBOOK_CLIENT_ID: string,
        FACEBOOK_CLIENT_SECRET: string,
        GOOGLE_CLIENT_ID: string,
        GOOGLE_CLIENT_SECRET: string,
      }
    }
  }

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}