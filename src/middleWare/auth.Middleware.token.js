const { authenticateToken } = require('../utis/JWT');

const authenticateMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  } 
  
  try {
    const user = authenticateToken(token);
    req.user = user;
  } catch (err) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
   
  next();
};

module.exports = authenticateMiddleware;