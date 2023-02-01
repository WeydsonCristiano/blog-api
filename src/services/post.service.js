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

const deletePost = async (id, idUser) => {
  const resp = await BlogPost.findOne({ where: { id } });
  if (!resp) return { type: 404, message: 'Post does not exist' };
  if (resp.userId !== idUser) return { type: 401, message: 'Unauthorized user' };
  const del = await BlogPost.destroy({ where: { id } });
  return del;
};

const searchPost = async (q) => {
  const query = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],
    },
    include: [
      { model: Category, as: 'categories' },
      { model: User, as: 'user', attributes: { exclude: ['password'] } }],
  });
return query;
};

module.exports = {
  postForPost,
  getPost,
  getPostId,
  putPost,
  deletePost,
  searchPost,
};