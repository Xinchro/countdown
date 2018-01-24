const app = require("../app.js").app

app.get('/help', function (req, res) {
  console.log("Help accessed")
  res.send("Hello, yes this is the help. <a href=\"/\">/</a>")
})