const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

commentSchema.methods.toJSON = function () {
  const { __v, _id, ...comment } = this.toObject();
  comment.uid = _id;
  return comment;
};

module.exports = model("Comment", commentSchema);
