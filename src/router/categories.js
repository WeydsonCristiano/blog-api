const { Router } = require('express');
const authenticateMiddleware = require('../middleWare/auth.Middleware.token');
const categoriesController = require('../controllers/categories.controller');

const routers = Router();

routers.post('/', authenticateMiddleware, categoriesController.postCategories);
routers.get('/', authenticateMiddleware, categoriesController.getCategories);

module.exports = routers;