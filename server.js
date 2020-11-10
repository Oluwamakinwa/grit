const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const initialize = require("./backend/routes/initialize");
const site_data = require("./backend/routes/sitedata");
const add_email = require("./backend/routes/addemail");
const emails_as_csv = require("./backend/routes/emails_as_csv");
const update_content = require("./backend/routes/update_content");
const preview_data = require("./backend/routes/preview_data");
const set_preview = require("./backend/routes/set_preview");
const is_logged_in = require("./backend/routes/is_logged_in");
const login = require("./backend/routes/login");
const logout = require("./backend/routes/logout");
const reset_password = require("./backend/routes/reset_password");
const auth_middleware = require("./backend/routes/auth_middleware");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: process.env.SESSION_SECRET }));
// Create Database Connection
mongoose.connect(process.env.MONGO_DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/initialize", initialize);
app.get("/site_data", site_data);
app.post("/add_email", add_email);
app.get("/emails_as_csv", auth_middleware, emails_as_csv);
app.post("/update_content", auth_middleware, update_content);
app.get("/preview_data", auth_middleware, preview_data);
app.post("/set_preview", auth_middleware, set_preview);
app.get("/logout", logout);
app.post("/login", login);
app.get("/is_logged_in", is_logged_in);
app.get("/reset_password", reset_password);

// here we are configuring dist to serve app files
app.use("/", serveStatic(path.join(__dirname, "/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is listening on port: ${port}`);
