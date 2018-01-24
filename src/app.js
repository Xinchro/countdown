const express = require('express')
const path = require('path')
const app = express()
app.listen(80)
app.use(express.static(path.join(__dirname, 'public')))

module.exports.app = app