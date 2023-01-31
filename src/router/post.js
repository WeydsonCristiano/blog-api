const { Router } = require('express');

const postController = require('../controllers/post.controller');
const authenticateMiddleware = require('../middleWare/auth.Middleware.token');
const verifPost = require('../middleWare/verifPost');
const verifCreatPost = require('../middleWare/verifCreatPost');

const routers = Router();

routers.get('/', authenticateMiddleware, postController.getPost);
routers.get('/:id');
routers.post('/', authenticateMiddleware, verifPost, verifCreatPost, postController.postForPost);

module.exports = routers;