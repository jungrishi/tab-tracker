// define web application; entry point for nodemon(server) to exec
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()// build express server
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// app.get('/status', (req, res) => {
//   res.send({
//     message: `hello ${req}`
//   })
// })

app.post('/register', (req, res) => {
  res.send({
    message: `hello ${req.body.email} you registered`
  })
})

app.listen(process.env.PORT || 8081)
