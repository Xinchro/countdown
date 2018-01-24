const app = require("../app.js").app
const fs = require("fs")

app.get('/style.css', function (req, res) {
  res.send(fs.readFileSync("src/css/style.css", "utf8"))
})