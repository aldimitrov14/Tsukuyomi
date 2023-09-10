declare global {
    namespace NodeJS {
      interface ProcessEnv {
        APP_URL: string,
        APP_PORT: string,
        MONGODB_URI: string,
        MAIL_HOST: string,
        MAIL_PORT: string,
        MAIL_USER: string,
        MAIL_PASSWORD: string,
        MAIL_TPL_PATH: string,
        API_LOG_FILENAME: string,
        COOKIE_SECRET: string,
        FACEBOOK_CLIENT_ID: string,
        FACEBOOK_CLIENT_SECRET: string,
        GOOGLE_CLIENT_ID: string,
        GOOGLE_CLIENT_SECRET: string,
      }
    }
  }

export {}