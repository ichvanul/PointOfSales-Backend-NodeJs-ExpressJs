const userModel = require('../models/user');
const miscHelper = require('../helpers/helpers');
const { genSaltSync, compareSync, hashSync } = require('bcrypt')
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer')
const connection = require('../config/db');

module.exports = {
  getUser: (req, res) => {
    userModel.getUser()
    .then((result) => {
      miscHelper.response(res, result, 200)
    })
    .catch(err => {
      miscHelper.response(res, result)
      console.log(err)
    })
  },

  userDetail: (req, res) => {
    const idUser = req.params.id
    userModel.userDetail(idUser)
    .then((result) => {
      if (result.length <= 0) {
        miscHelper.response(res, {}, 400, 'User not found!')
      } else {
        miscHelper.response(res, result, 200, 'Success')
      }
    })
    .catch(err => console.log(err));
  },

  register: (req, res) => {
    const {name, email, password} = req.body
    const data = {
      name,
      email,
      password,
      status: 0,
      role_id: 0,
    }
    // const salt = genSaltSync(10)
    // data.password = hashSync(data.password, salt)
    userModel.register(data)
    .then((result) => {
      console.log(result)
      miscHelper.response(res, result, 200, 'Register success!')
    })
    .catch(err => {
      miscHelper.response(res, err, 201, 'Register failed!')
      console.log(err)
    })
  },

  login: (req, res) => {
    const {email, password} = req.body
    const data = {
      email,
      password,
    }
    userModel.login(data.email)
    .then(result => {
      const data = {
        email,
        password,
      }
      // const results = compareSync(data.password, result.password)
      console.log(results);
      if (results) {
        // result.password = undefined;
        return res.json({
          success: 1,
          message: 'Login success!',
          result
        })
      } 
      else {
        return res.json({
          success: 0,
          message: 'Your password is incorrect. Try again!',
        })
      }
    })
    .catch(err => {
      return res.json({
        success: 0,
        message: 'Please ensure that you have registered.'
      })
    })
  },

  editUser: (req, res) => {
    const idUser = req.params.id
    const {name, email, password} = req.body
    const data = {
      name,
      email,
      password,
    }
    const salt = genSaltSync(10)
    data.password = hashSync(data.password, salt)
    userModel.editUser(idUser, data)
    .then(result => {
      miscHelper.response(res, data, 200, 'Update success')
    })
    .catch(err => {
      miscHelper.response(res, {}, 400, 'An error has occured!')
    })
  },

  deleteUser: (req, res) => {
    const idUser = req.params.id
    userModel.deleteUser(idUser)
    .then((result) => {
      if(result.length <= 0) {
        miscHelper.response(res, {}, 400, 'User not found!')
      } else {
        userModel.deleteUser(idUser)
        .then((result) => {
          miscHelper.response(res, result, 200, 'Delete success!')
        })
      }
    })
    .catch(err => console.log(err));
  }
}