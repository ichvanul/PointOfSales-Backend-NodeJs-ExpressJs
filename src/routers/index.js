const express = require('express');
const menu = require('./menu');
const user = require('./user');
const Router = express.Router();

Router.use('/menu', menu);
Router.use('/user', user);

module.exports = Router;