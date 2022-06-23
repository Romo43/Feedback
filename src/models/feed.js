import mongoose from "mongoose";
const { Schema, model } = mongoose;

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

feedSchema.methods.toJSON = function () {
  const { __v, _id, ...feed } = this.toObject();
  feed.uid = _id;
  return feed;
};

export default model("Feed", feedSchema);
