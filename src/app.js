const express = require('express');
require('express-async-errors');

const loginRoutes = require('./router/login');
const userRoutes = require('./router/user');
// ...

const app = express();

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/user', userRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
