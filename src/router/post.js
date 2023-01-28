const { Router } = require('express');

const postController = require('../controllers/login.controller');
const authenticateMiddleware = require('../middleWare/auth.Middleware.token');

const routers = Router();

routers.post('/', authenticateMiddleware, postController);

module.exports = routers;