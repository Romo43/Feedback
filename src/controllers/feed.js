import Feed from "../models/feed.js";

// Get all feeds
export const getAllFeeds = async (req, res) => {
  const [total, feeds] = await Promise.all([
    Feed.countDocuments(),
    Feed.find(),
  ]);
  let totalScore = 0;
  feeds.forEach((feed) => {
    totalScore += feed.score;
  });
  let averageScore = Math.round(totalScore / total);
  if (!averageScore) {
    averageScore = 0;
  }
  res.json({
    averageScore,
    total,
    data: feeds,
  });
};

// Create a feed
export const createFeed = async (req, res) => {
  const { title, description, score } = req.body;
  const newFeed = new Feed({
    title,
    description,
    score,
  });
  await newFeed.save();
  res.status(201).json({
    message: "Feed created successfully",
  });
};
