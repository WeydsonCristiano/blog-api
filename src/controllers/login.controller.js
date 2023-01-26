const loginService = require('../services/login.services');

const getLogin = async (req, res) => {
    const students = await loginService.getlogin();
    return res.status(200).json(students);
};

module.exports = {
  getLogin,
};