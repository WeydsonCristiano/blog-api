const { User } = require('../models');

const PostUser = async (displayName, email, password, image) => {
  try {
    const newUser = await User.create({ displayName, email, password, image });
    return { type: '', message: newUser };
  } catch (erro) {
    return { type: 409, message: 'User already registered' };
  }
};
 
module.exports = {
    PostUser,
};
