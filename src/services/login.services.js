const { getLogin } = require('../controllers/login.controller');
const loginModel = require('../models/login');

const GetLogin = async () =>
  loginModel.findAll({
    include: { model: getLogin, as: 'login' },
  });

module.exports = {
    GetLogin,
};
