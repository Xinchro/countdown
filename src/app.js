require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
app.listen(process.env.PORT || 8080)
app.use(express.static(path.join(__dirname, 'public')))

module.exports.app = app