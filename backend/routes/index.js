const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const initialize = require("./controllers/initialize");
const site_data = require("./controllers/sitedata");
const add_email = require("./controllers/addemail");
const emails_as_csv = require("./controllers/emails_as_csv");
const update_content = require("./controllers/update_content");
const preview_data = require("./controllers/preview_data");
const set_preview = require("./controllers/set_preview");
const is_logged_in = require("./controllers/is_logged_in");
const login = require("./controllers/login");
const logout = require("./controllers/logout");
const reset_password = require("./controllers/reset_password");
const auth_middleware = require("./middlewares/auth_middleware");

const express = require("express");
const app = express.Router();

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

module.exports = app;
