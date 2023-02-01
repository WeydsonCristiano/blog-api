const { Router } = require('express');

const routers = Router();
const userController = require('../controllers/user.controller');
const verifUser = require('../middleWare/verifDisplay');
const authenticateMiddleware = require('../middleWare/auth.Middleware.token');

routers.get('/', authenticateMiddleware, userController.getUser);
routers.get('/:id', authenticateMiddleware, userController.getById);
routers.post('/', verifUser, userController.postUser);
routers.delete('/me', authenticateMiddleware, userController.delUser);

module.exports = routers;