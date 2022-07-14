import { config } from "dotenv";

// Run dotenv
config();

// Extract the environment variables from the .env file
const {
  PORT = 8080,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_CLUSTER,
  MONGO_AUTH,
  MONGO_NAME,
} = process.env;

// Database configuration
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.${MONGO_AUTH}.mongodb.net/${MONGO_NAME}?retryWrites=true&w=majority`;

// Export configurations
export { PORT, MONGO_URI };
