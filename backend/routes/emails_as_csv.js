const Email = require("../models/Email");
const Parser = require("json2csv").Parser;

module.exports = (req, res) => {
  Email.find({}, { email: 1, createdAt: 1, _id: 0 })
    .sort({ email: 1 })
    .exec(async (error, emails) => {
      const fields = [
        {
          label: "Email",
          value: "email"
        },
        {
          label: "Created At",
          value: "createdAt"
        }
      ];
      const parser = new Parser({ fields });
      const csv = parser.parse(emails);
      res.header("Content-Type", "text/csv");
      res.attachment("emails.csv");
      res.send("Your CSV file will be downloaded shortly");
      return res.send(csv);
    });
};
