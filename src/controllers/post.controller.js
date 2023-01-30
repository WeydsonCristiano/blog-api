const postService = require('../services/post.service');

const postForPost = async (req, res) => {
  const post = req.body;
  const { id } = req.user;
  const result = await postService.postForPost(id, post);
  return res.status(201).json(result);
};

module.exports = {
  postForPost,
};
