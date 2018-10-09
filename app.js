const app = require("express")();
const bodyParser = require("body-parser");
const cors = require('cors')
const getTopic = require('./controller/controller')

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())


app.get("/", getTopic)


app.use("/*", (req, res, next) => {
  res.status(404).send({ msg: "Page Not Found" });
});

module.exports = app;