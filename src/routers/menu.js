const express = require('express');
const Router = express.Router();
const menuController = require('../controller/menu');
const cors = require('cors');

Router.get('/', menuController.getMenu)
Router.post('/', menuController.insertMenu)
Router.patch('./:id', menuController.updateMenu)
Router.delete('./:id', menuController.deleteMenu)

module.exports = Router;