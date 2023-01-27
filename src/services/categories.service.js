const { Category } = require('../models');

const postCategories = async (name) => {
  try {
    const newName = await Category.create({ name });
    return { type: '', message: newName };
  } catch (erro) {
    return { type: 400, message: '"name" is required' };
  }
};

module.exports = {
    postCategories,
};