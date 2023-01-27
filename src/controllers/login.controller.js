const loginService = require('../services/login.services');

const postLogin = async (req, res) => {
  const { email, password } = req.body;
    const token = await loginService.postlogin(email, password);
    return res.status(200).json(token);
};

module.exports = {
  postLogin,
};