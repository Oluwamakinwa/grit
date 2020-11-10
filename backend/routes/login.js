const Password = require("../models/Password");
const sanitize = require("mongo-sanitize");
const bcrypt = require("bcryptjs");
module.exports = (req, res) => {
  let { password } = req.body;
  let sanitizedPassword = sanitize(password.trim());
  Password.findOne({}, (err, password) => {
    console.log(password);
    if (password) {
      bcrypt.compare(sanitizedPassword, password.password).then(r => {
        if (r === true) {
          res.status(200);
          req.session.loggedIn = true;
          res.json({ message: "Logged in successfully" });
        } else {
          res.status(400);
          res.json({ message: "The password you supplied is incorrect" });
        }
      });
    }
  });
};
