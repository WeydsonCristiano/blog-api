require('dotenv/config');
const userService = require('../services/user.service');
const { generateToken } = require('../utis/JWT');

const postUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { type, message } = await userService.PostUser(displayName, email, password, image);
    if (type) {
      return res.status(type).json({ message });
    }

    const payload = { displayName, email };
    console.log('estou no pay', payload);
    const token = generateToken(payload);

    res.status(201).json({ token });
  } catch (err) {
    return res.status(500);
  }
};

const getUser = async (req, res) => {
  const users = req.body;
  const resp = await userService.getUsers(users);
  return res.status(200).json(resp);
};

module.exports = {
  postUser,
  getUser,
};