const postService = require('../services/post.service');

const postForPost = async (req, res) => {
  const post = req.body;
  const { id } = req.user;
  const result = await postService.postForPost(id, post);
  return res.status(201).json(result);
};

const getPost = async (_req, res) => {
  const resp = await postService.getPost();
  return res.status(200).json(resp);
};

const getPostId = async (req, res) => {
  const { id } = req.params;
  const resp = await postService.getPostId(id);
  if (!resp) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(resp);
};

const putPost = async (req, res) => {
  const { id } = req.params;
  const idUser = req.user.id;
  const updat = req.body;
  const resp = await postService.putPost(id, idUser, updat);
  if (resp.type) return res.status(401).json({ message: resp.message });
  return res.status(200).json(resp);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const idUser = req.user.id;
  const resp = await postService.deletePost(id, idUser);
  if (resp.type) return res.status(resp.type).json({ message: resp.message });
  res.status(204).end();
};

const searchPost = async (req, res) => {
  const { q } = req.query;
  const resp = await postService.searchPost(q);
  return res.status(200).json(resp);
};

module.exports = {
  postForPost,
  getPost,
  getPostId,
  putPost,
  deletePost,
  searchPost,
};
