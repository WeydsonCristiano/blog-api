const { PostCategory, BlogPost } = require('../models');

const postForPost = async (userId, { title, content, categoryIds }) => {
  console.log('*********estou no id', userId);
  console.log('*********estou no title', title);
  console.log('*********estou no content', content);
  console.log('*********estou no categoty', categoryIds);
  const post = await BlogPost.create({ title, content, userId });
  console.log('*********estou no post', post);
  const arrayNovo = categoryIds.map((item) => ({ postId: post.id, categoryIds: item }));
  const newPost = PostCategory.bulkCreate(arrayNovo);
  return { type: '', message: newPost };
};

module.exports = {
  postForPost,
};