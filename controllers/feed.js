const Feed = require("../models/feed");

const getAllFeeds = async (req, res) => {
  const [total, feeds] = await Promise.all([
    Feed.countDocuments(),
    Feed.find(),
  ]);

  const totalScore = feeds.map((feed) => feed.score).reduce((a, b) => a + b);
  const averageScore = Math.round(totalScore / total);

  res.json({
    averageScore,
    total,
    data: feeds,
  });
};

const createFeed = async (req, res) => {
  const { title, feed, score } = req.body;
  const newFeed = new Feed({
    title,
    feed,
    score,
  });
  await newFeed.save();
  res.status(201).json({
    message: "Feed created successfully",
    data: newFeed,
  });
};

module.exports = { getAllFeeds, createFeed };
