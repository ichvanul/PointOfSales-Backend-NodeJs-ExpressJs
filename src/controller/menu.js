require('dotenv').config();
const menuModel = require('../models/menu');
const miscHelper = require('../helpers/helpers');
const connection = require('../config/db');

module.exports = {
  getMenu: (req, res) => {
    const page = req.query.page;
    const search = req.query.search;
    if (!page) {menuModel.getData(search)
    .then((result) => {
      miscHelper.response(res, result, 200)
      console.log(page);
    })
    .catch(err => {
      miscHelper.response(res, {}, 400, err)
      console.log(err);
    })
  } else {connection.query("SELECT COUNT(*) as total FROM `menu`", (err, result) => {
    const total = result[0].total;
    if(page > 0) {
      menuModel.getPage(page, total)
      .then((result) => {
        miscHelper.response(res, result, 200)
      })
      .catch((err) => {
        miscHelper.response(res, {}, res.status, err)
      })
    }
  })
  }},

  insertMenu: (req, res) => {
    const {name, price, category} = req.body
    const data = {
      name,
      price,
      image: `http://localhost:8000/uploads/${req.file.filename}`,
      category,
    }
    menuModel.insertMenu(data)
    .then((result) => {
      res.send(result);
    })
    .catch(err => console.log(err));
  },

  updateMenu: (req, res) => {
    const idMenu = req.params.id
    const {name, price, image} = req.body
    const data = {
      name,
      price,
      image,
    }
    menuModel.updateMenu(idMenu, data)
    .then((resutlt) => {
      res.send(result);
    })
    .catch(err => console.log(err));
  },

  deleteMenu: (req, res) => {
    const idMenu = req.params.id
    menuModel.deleteMenu(idMenu)
    .then((result) => {
      res.send(result);
    })
    .catch(err => console.log(err));
  },
}