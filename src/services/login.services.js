const { User } = require('../models');

const PostLogin = async (email, password) =>
  User.findOne({
    Where: { email, password },
  });

module.exports = {
    PostLogin,
};
