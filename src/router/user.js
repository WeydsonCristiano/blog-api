const { Router } = require('express');

const routers = Router();
const userController = require('../controllers/user.controller');
const verifUser = require('../middleWare/verifDisplay');
const authenticateMiddleware = require('../middleWare/auth.Middleware.token');

routers.get('/', authenticateMiddleware, userController.getUser);
routers.post('/', verifUser, userController.postUser);

module.exports = routers;