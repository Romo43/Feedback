import mongoose from "mongoose";
const { connect } = mongoose;
import { CURRENT_ENV, MONGO_URI } from "./config.js";

(async () => {
  try {
    await connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected database in ${CURRENT_ENV}`);
  } catch (error) {
    console.log("Error", error);
  }
})();
