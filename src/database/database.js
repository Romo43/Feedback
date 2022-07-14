import mongoose from "mongoose";
const { connect } = mongoose;
import { MONGO_URI } from "../config/config.js";

// Connect to the database
(async () => {
  try {
    await connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error", error);
  }
})();
