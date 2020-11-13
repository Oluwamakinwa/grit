const Password = require("../../models/Password");
const bcrypt = require("bcryptjs");
const sanitize = require("mongo-sanitize");
module.exports = (req, res) => {
  let password = process.env.CMS_PASSWORD;
  Password.deleteMany({}, error => console.log(error));
  bcrypt.genSalt(
    // We parseInt because the method requires a Number, specifically an integer
    parseInt(process.env.SALT_ROUNDS),
    (error, salt) => {
      bcrypt.hash(sanitize(password.trim()), salt).then(hash => {
        Password.create({ password: hash }, error => {
          if (error) {
            res.status(400);
            res.json(error);
            console.log(error);
          } else {
            res.status(200);
            res.json({ message: "Password reset successfully" });
          }
        });
      });
    }
  );
};
