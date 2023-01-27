const { Category } = require('../models');

const postCategories = async (name) => {
  try {
    const newName = await Category.create({ name });
    return { type: '', message: newName };
  } catch (erro) {
    return { type: 400, message: '"name" is required' };
  }
};

const getCategories = async (name) => {
  const fullBd = await Category.findAll(name);
  return fullBd;
};

module.exports = {
    postCategories,
    getCategories,
};