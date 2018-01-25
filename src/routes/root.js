const app = require("../app.js").app
const fs = require("fs")
const moment = require("moment-timezone")

const locations = [
  {
    "name": "london-uk",
    "tz": "Europe/London"
  },
  {
    "name": "london-ca",
    "tz": "America/Toronto"
  },
  {
    "name": "johannesburg-sa",
    "tz": "Africa/Johannesburg"
  },
  {
    "name": "losangeles-na",
    "tz": "America/Los_Angeles"
  }
]

app.get('/', function (req, res) {
  let template = fs.readFileSync("src/routes/abc.html", "utf8")
  let timeStr = ""

  locations.forEach((zone, i) => {
    timeStr += `|${zone.name}: ${getTimeStr(zone.tz)}\n`
  })


  template = template.replace("%thetimedescription%", timeStr)


  res.send(template)
})

function getTimeStr(tz) {
  const time = getTime(tz)

  time.hour = time.hour < 10 ? `0${time.hour}` : time.hour
  time.minute = time.minute < 10 ? `0${time.minute}` : time.minute
  time.second = time.second < 10 ? `0${time.second}` : time.second

  return `${time.hour}:${time.minute}:${time.second}`
}

function getTime(tz) {
  let now = moment().tz(tz)
  let hour = now.hour()
  let minute = now.minute()
  let second = now.second()

  return {"hour":hour, "minute":minute, "second":second}
}