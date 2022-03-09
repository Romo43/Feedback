const Comment = require("../models/comment");

const createComment = async (req, res) => {
  const { title, description } = req.body;
  const comment = new Comment({
    title,
    description,
  });
  await comment.save();
  res.json({ comment });
};

module.exports = { createComment };
