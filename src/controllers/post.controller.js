const postService = require('../services/post.service');

const postForPost = async (req, res) => {
    const post = req.body;
    const { id } = req.user;
    const { type, message } = await postService.postForPost(id, post);
    if (!type) return res.status(400).json({ message: 'Some required fields are missing' });
    return res.status(201).json(message);
  };
  
  module.exports = {
    postForPost,
  };