const { Router } = require('express');

const loginController = require('../controllers/login.controller');

const routers = Router();

routers.post('/', loginController.postLogin);

module.exports = routers;