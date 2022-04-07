const { Schema, model } = require("mongoose");

const feedSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  feed: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    require: true,
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

module.exports = model("Feed", feedSchema);
