const { PostCategory, Blogpost } = require('../models');

const postForPost = async (id, { title, content, categoryIds }) => {
  const post = await Blogpost.Create({ title, content, id });
  console.log('estou na serv model com postagem', post);
  const arrayNovo = categoryIds.map((item) => ({ postId: post.id, categoryIds: item }));
  console.log('estou na serv model com arrayNovo', arrayNovo);
  try {
   const newPost = PostCategory.bulkcreate(arrayNovo);
   console.log('estou na serv model com newPost', newPost);
   return { type: '', message: newPost };
  } catch (error) {
return { type: 400, message: 'one or more "categoryIds" not found' };
}
};

module.exports = {
  postForPost,
};