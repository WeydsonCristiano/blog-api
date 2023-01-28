const postService = require('../services/post.service');

const postForPost = async (req, res) => {
    try {
      const { title, content, categoryIds } = req.body;
      const { type, message } = await postService.postForPost(title, content, categoryIds);
      if (type) {
        return res.status(type).json({ message });
      }
    return res.status(201).json(message);
    } catch (err) {
      return res.status(500);
    }
  };
  module.exports = postForPost;