const { User } = require('../models');

const PostLogin = async (email, password) => {
  const resultApi = await User.findOne({ where: { email, password } });
  return resultApi;
};
 
module.exports = {
    PostLogin,
};
