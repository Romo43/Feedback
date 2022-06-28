import { config } from "dotenv";

config();

const {
  PORT = 8080,
  NODE_ENV,
  MONGO_ENV,
  MONGO_PORT,
  MONGO_NAME,
  MONGO_PASSWORD,
  MONGO_USER,
} = process.env;

const MONGO_LOCAL_HOST = `mongodb://127.0.0.1:27017/${MONGO_NAME}`;
const MONGO_CLOUD_HOST = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PORT}.mongodb.net/${MONGO_NAME}?retryWrites=true&w=majority`;

let MONGO_URI, CURRENT_ENV, CURRENT_DB = "";

if (NODE_ENV == 0 && MONGO_ENV == 0) {
  MONGO_URI = MONGO_LOCAL_HOST;
  CURRENT_ENV = "development";
  CURRENT_DB = "locally";
} else if (NODE_ENV == 0 && MONGO_ENV == 1) {
  MONGO_URI = MONGO_CLOUD_HOST;
  CURRENT_ENV = "development";
  CURRENT_DB = "in the cloud";
} else {
  MONGO_URI = MONGO_CLOUD_HOST;
  CURRENT_ENV = "production";
  CURRENT_DB = "in the cloud";
}

export { PORT, MONGO_URI, CURRENT_ENV, CURRENT_DB };
