/* eslint-disable */
// define web application; entry point for nodemon(server) to exec
// console.log('helo')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
// model folder with indexx.js file with sequelize(returns it) as a attributes
const config = require('./config/config')

const app = express()// build express server
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
// app.get('/status', (req, res) => {
//   res.send({
//     message: `hello ${req}`
//   })
// })

require('./routes')(app)
sequelize.sync({force: true})
  .then(() => {
    app.listen(config.port)
    console.log(`server started on port ${config.port}`)
  })
