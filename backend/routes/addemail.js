const Email = require("../models/Email");
const EmailValidator = require("commons-validator-js").EmailValidator;
const validator = new EmailValidator();
module.exports = (req, res) => {
  const { email } = req.body;
  if (validator.isValid(email)) {
    Email.create({ email }, error => {
      if (error) {
        if (error.code === 11000) {
          res.status(400);
          res.json({
            message: `The email address "${email}" has already been registered`
          });
        } else {
          res.status(400);
          res.json(error);
        }
      } else {
        res.status(200);
        res.json({ message: "Email added successfully" });
      }
    });
  } else {
    res.status(400);
    res.json({ message: `The email "${email}" you entered is invalid` });
  }
};
