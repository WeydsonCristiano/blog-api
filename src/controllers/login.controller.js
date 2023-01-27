require('dotenv/config');
const loginService = require('../services/login.service');
const { generateToken } = require('../utis/JWT');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginService.PostLogin(email, password);
    if (!user) {
      return res.status(400).json({
        message: 'Invalid fields',
      });
    }
    const payload = { email, password };
    const token = generateToken(payload);
    
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500);
  }
};