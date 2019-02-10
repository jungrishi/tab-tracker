/* eslint-disable */
// index.js for connnecting to db
// node style of file system db
const fs = require('fs')
// path modules for dealing with abs and relative paths
const path = require('path')
// model to create a seque.. obj and connect to database
const Sequelize = require('sequelize')
const config = require('../config/config')
// db object to be exported
const db = {}

// declaring a sequelize obj
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)
// read all files in models folder and load to sequelize
fs
  .readdirSync(__dirname)
  .filter((file) => 
    file !== 'index.js'
  )  
  .forEach((file) => {
      // import path and join path of dir name
      const model = sequelize.import(path.join(__dirname, file))
      db[model.name] = model
      // db.User=model
  })

db.sequelize = sequelize

db.Sequelize = Sequelize  

module.exports = db