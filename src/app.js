const express = require('express');
require('express-async-errors');

const loginRoutes = require('./router/login');
const userRoutes = require('./router/user');
const categoriesRoutes = require('./router/categories');
const postRoutes = require('./router/post');
// ...

const app = express();

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/user', userRoutes);
app.use('/categories', categoriesRoutes);
app.use('/post', postRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
