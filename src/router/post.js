const { Router } = require('express');

const postController = require('../controllers/post.controller');
const authenticateMiddleware = require('../middleWare/auth.Middleware.token');
const { verifPost, verifPut } = require('../middleWare/verifPost');
const verifCreatPost = require('../middleWare/verifCreatPost');

const routers = Router();

routers.get('/', authenticateMiddleware, postController.getPost);
routers.get('/:id', authenticateMiddleware, postController.getPostId);
routers.put('/:id', authenticateMiddleware, verifPut, postController.putPost);
routers.delete('/:id', authenticateMiddleware, postController.deletePost);
routers.post('/', authenticateMiddleware, verifPost, verifCreatPost, postController.postForPost);

module.exports = routers;