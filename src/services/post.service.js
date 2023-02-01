const { Op } = require('sequelize');
const { PostCategory, BlogPost, Category, User } = require('../models');

const postForPost = async (Id, { title, content, categoryIds }) => {
  const post = await BlogPost.create({ title, content, userId: Id });
  const arrayNovo = categoryIds.map((item) => ({
    postId: post.id,
    categoryId: item,
  }));
   await PostCategory.bulkCreate(arrayNovo);
  return post;
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

const getPostId = async (id) => {
  const response = await BlogPost.findByPk(id, { include: [
    {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Category,
      as: 'categories',
    },
  ],
});
  return response;
};

const putPost = async (id, idUser, { title, content }) => {
  const blog = await getPostId(id);
  if (blog.userId !== idUser) return { type: 401, message: 'Unauthorized user' };
     await BlogPost.update(
      { title, content },
      { where: { id, userId: { [Op.eq]: idUser } } },
    );
  const resp = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return resp;
};

module.exports = {
  postForPost,
  getPost,
  getPostId,
  putPost,
};