const { modelPost } = require('../models');

const postForPost = async (title, content, categoryIds) => {
    if (!title 
        || !content 
        || !categoryIds) return { type: 400, message: 'Some required fields are missing' };
    try {
      const newName = await modelPost.bulkCreate({ title, content, categoryIds });
      return { type: '', message: newName };
    } catch (erro) {
      return { type: 400, message: 'Some required fields are missing' };
    }
  };

  module.exports = postForPost;