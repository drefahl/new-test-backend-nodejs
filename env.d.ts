declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;
    MONGO_URI: string;
    MONGO_URI_DOCKER: string;
    MONGO_DB?: string;
    MONGO_USER?: string;
    MONGO_PASSWORD?: string;
  }
}
