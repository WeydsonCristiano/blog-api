const { Router } = require('express');

const postController = require('../controllers/post.controller');
const authenticateMiddleware = require('../middleWare/auth.Middleware.token');

const routers = Router();

routers.post('/', authenticateMiddleware, postController.postForPost);

module.exports = routers;