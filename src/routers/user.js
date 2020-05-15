const express = require('express');
const Router = express.Router();
const userController = require('../controller/user');

Router.get('/', userController.getUser)
Router.get('/:id', userController.userDetail)
Router.post('/register', userController.register)
Router.post('/login', userController.login)
Router.patch('/edit/:id', userController.editUser)
Router.delete('/:id', userController.deleteUser)

module.exports = Router;