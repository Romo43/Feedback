import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Feed Schema
const feedSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    trim: true,
    enum: [1, 2, 3, 4, 5],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Select only the fields that we want to show
feedSchema.methods.toJSON = function () {
  const { __v, _id, ...feed } = this.toObject();
  feed.uid = _id;
  return feed;
};

// Export the model
export default model("Feed", feedSchema);
