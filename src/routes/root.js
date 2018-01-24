const app = require("../app.js").app
const fs = require("fs")

app.get('/', function (req, res) {
  console.log("Root accessed")
  res.send(fs.readFileSync("src/routes/abc.html", "utf8"))
  // res.send('Hello World <a href=\"/help\">/help</a>')
})