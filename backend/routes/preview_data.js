const Preview = require("../models/Preview");
module.exports = (req, res) => {
  Preview.findOne({}, {}, { sort: { createdAt: -1 } }, function(err, data) {
    res.status(200);
    res.json(data);
  });
};
