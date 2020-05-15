const connection = require('../config/db');

module.exports = {
  getUser: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM `user`", (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject (new Error(err))
        }
      })
    })
  },

  userDetail: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM `user` WHERE id = ?", id, (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  register: data => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO `user` SET ?', data, (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  checkEmail: email => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT user.email FROM `user` WHERE email = ?", email, (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  login: email => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM `user` WHERE email = ?", email, (err, result) => {
        if(!err) {
          resolve(result[0])
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  editUser: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE `user` SET ? WHERE id = ?", [data, id], (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM `user` WHERE id = ?", id, (err, result) => {
        if(!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
}