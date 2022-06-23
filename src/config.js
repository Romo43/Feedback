import { config } from "dotenv";

config();

const {
  PORT = 8080,
  NODE_ENV,
  MONGO_PORT,
  MONGO_NAME,
  MONGO_PASSWORD,
  MONGO_USER,
} = process.env;

const MONGO_LOCAL_HOST = `mongodb://127.0.0.1:27017/${MONGO_NAME}`;
const MONGO_CLOUD_HOST = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PORT}.mongodb.net/${MONGO_NAME}?retryWrites=true&w=majority`;

const MONGO_URI = NODE_ENV == 0 ? MONGO_LOCAL_HOST : MONGO_CLOUD_HOST;
const CURRENT_ENV = NODE_ENV == 0 ? "development" : "production";

export { PORT, CURRENT_ENV, MONGO_URI };
