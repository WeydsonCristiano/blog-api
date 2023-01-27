const { User } = require('../models');

const PostUser = async (displayName, email, password, image) => {
  try {
    const newUser = await User.create({ displayName, email, password, image });
    return { type: '', message: newUser };
  } catch (erro) {
    return { type: 409, message: 'User already registered' };
  }
};

const getUsers = async () => {
  try {
  const fullUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return fullUsers;
} catch (erro) {
  return { type: 500, message: erro };
}
};

const getById = async (id) => {
  const idUsers = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return idUsers;
};
 
module.exports = {
    PostUser,
    getUsers,
    getById,
};