const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'seusecretdetoken';

const generateToken = (payload) =>
  jwt.sign(payload, TOKEN_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });

const authenticateToken = (token) => {
  const verificationResponse = jwt.verify(token, TOKEN_SECRET);
  return verificationResponse;
};

module.exports = {
  generateToken,
  authenticateToken,
};