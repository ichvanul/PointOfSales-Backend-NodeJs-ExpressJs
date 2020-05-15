const connection = require('../config/db');

module.exports = {
  getData: (search) => {
    return new Promise((resolve, reject) => {
      if(search) {
        connection.query("SELECT * FROM `menu` WHERE name LIKE ? OR price LIKE ?", [`%${search}%`, `%${search}%`], (err, result) => {
          if(!err){
            resolve(result)
          }else{
            reject(new Error(err))
          }
        })
      }else{
        connection.query("SELECT * FROM `menu`", (err, result) => {
          if(!err){
            resolve(result)
          }else{
            reject(new Error(err))
          }
        })
      }
    })
  },

  getPage: (page, total) => {
    const dataPage = 5;
    const totalPage = total / dataPage;
    const firstDate = dataPage * page - dataPage;

    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM `menu` ORDER BY id ASC LIMIT ?, ?", [firstDate, dataPage], (err, result) => {
        if(!err){
          const thisPage = Math.ceil(totalPage);
          if(page <= thisPage){
            resolve([thisPage, `Total menu: ${total}`, `Current Page: ${page}`, result])
          }else{
            reject(new Error(err))
          }
        }
      })
    })
  },

  insertMenu: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO `menu` SET ?", data, (err, result) => {
        if(!err){
          resolve(result)
        }else{
          reject(new Error(err))
        }
      })
    })
  },

  updateMenu: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE `menu` SET ? WHERE id = ?", [id, data], (err, result) => {
        if(!err){
          resolve(result)
        }else{
          reject(new Error(err))
        }
      })
    })
  },

  deleteMenu: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM `menu` WHERE id = ?", id, (err, result) => {
        if(!err){
          resolve(result)
        }else{
          reject(new Error(err))
        }
      })
    })
  },
}