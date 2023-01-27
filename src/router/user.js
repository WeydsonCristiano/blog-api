const { Router } = require('express');

const userController = require('../controllers/user.controller');
const verifUser = require('../middleWare/verifDisplay');

const routers = Router();

routers.post('/', verifUser, userController);

module.exports = routers;