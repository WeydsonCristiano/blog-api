const { Op } = require('sequelize');
const { Category } = require('../models');

const verifCreatPost = async (req, res, next) => {
    const { categoryIds } = req.body;
    const filtroCategory = await Category.findAll({
        where: {
            id: { [Op.in]: categoryIds },
        },
    });
    if (filtroCategory.length !== categoryIds.length) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    next();
};

module.exports = verifCreatPost;