const { Router } = require('express');

const loginController = require('../controllers/login.controller');

const routers = Router();

routers.get('/login', loginController.getLogin);

module.exports = routers;