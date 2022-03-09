const Comment = require("../models/comment");

const getComments = async (req, res) => {
  const { limit = 5, skip = 0 } = req.query;
  const query = { status: true };
  const [total, comments] = await Promise.all([
    Comment.countDocuments(query),
    Comment.find(query).skip(Number(skip)).limit(Number(limit)),
  ]);
  res.json({
    total,
    comments,
  });
};

const createComment = async (req, res) => {
  const { title, description } = req.body;
  const comment = new Comment({
    title,
    description,
  });
  await comment.save();
  res.json({ comment });
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findById(id);
  if (!comment) {
    return res.status(404).json({ msg: "Comment not found" });
  }
  comment.status = !comment.status;
  await comment.save();
  res.json({ comment });
};

module.exports = { getComments, createComment, updateStatus };
