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

const getById = async (req, res) => {
  const { id } = req.params;
  const resp = await userService.getById(id);
  console.log('estou no controler', id);
  if (!resp) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(resp);
  };

module.exports = {
  postUser,
  getUser,
  getById,
};