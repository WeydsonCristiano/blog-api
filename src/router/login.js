const { Router } = require('express');

const loginController = require('../controllers/login.controller');
const verif = require('../middleWare/verifEmailPassw');

const routers = Router();

routers.post('/', verif, loginController);

module.exports = routers;