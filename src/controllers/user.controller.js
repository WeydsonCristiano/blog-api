require('dotenv/config');
const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const { type, message } = await userService.PostUser(displayName, email, password, image);
    if (type) {
      return res.status(type).json({ message });
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: { userId: message.id } }, secret, jwtConfig);
    res.status(201).json({ token });
  } catch (err) {
    return res.status(500);
  }
};