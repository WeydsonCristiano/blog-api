require('dotenv/config');
const jwt = require('jsonwebtoken');
const loginService = require('../services/login.service');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginService.PostLogin(email, password);
    if (!user) {
      return res.status(400).json({
        message: 'Invalid fields',
      });
    }
    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500);
  }
};