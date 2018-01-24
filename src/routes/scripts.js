const app = require("../app.js").app
const fs = require("fs")

app.get('/script.js', function (req, res) {
  res.send(fs.readFileSync("src/scripts/script.js", "utf8"))
})