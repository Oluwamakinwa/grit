var sslRedirect = require("heroku-ssl-redirect").default;
const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const initialize = require("./backend/routes/initialize");
const site_data = require("./backend/routes/sitedata");
const add_email = require("./backend/routes/addemail");
const emails_as_csv = require("./backend/routes/emails_as_csv");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
// Create Database Connection
mongoose.connect(process.env.MONGO_DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/initialize", initialize);
app.get("/site_data", site_data);
app.post("/add_email", add_email);
app.get("/emails_as_csv", emails_as_csv);

// enable ssl redirect
app.use(sslRedirect());
// here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);
