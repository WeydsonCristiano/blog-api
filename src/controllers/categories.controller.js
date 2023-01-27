require('dotenv/config');
const categoriesService = require('../services/categories.service');

const postCategories = async (req, res) => {
  try {
    const { name } = req.body;
    const { type, message } = await categoriesService.postCategories(name);
    if (type) {
      return res.status(type).json({ message });
    }
  return res.status(201).json(message);
  } catch (err) {
    return res.status(500);
  }
};

  module.exports = {
    postCategories,
};