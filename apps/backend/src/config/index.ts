const dotenv = require('dotenv-json-complex');
const envFile = process.env.ENV_FILE || 'env.json';
dotenv({ path: envFile });

export const SERVICE_NAME = 'backend';

export interface AppConfig {
  serviceName: string;
  httpPort: number;
  grpcPort: number;
}

export const config: AppConfig = {
  serviceName: SERVICE_NAME,
  httpPort: 9000,
  grpcPort: 9001,
};
