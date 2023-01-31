const { PostCategory, BlogPost, Category, User } = require('../models');

const postForPost = async (Id, { title, content, categoryIds }) => {
  const post = await BlogPost.create({ title, content, userId: Id });
  const arrayNovo = categoryIds.map((item) => ({
    postId: post.id,
    categoryId: item,
  }));
  const [newPost] = await PostCategory.bulkCreate(arrayNovo);
  const result = newPost.dataValues.postId;
  return {
    id: result,
    title,
    content,
    userId: Id,
  };
};

const getPost = async () => {
  const response = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      {
        model: Category,
        as: 'categories',
      },
    ],
  });
  
  return response;
};

module.exports = {
  postForPost,
  getPost,
};
