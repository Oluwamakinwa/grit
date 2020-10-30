const Site = require("../models/Site");
module.exports = (req, res) => {
  Site.findOne({}, {}, { sort: { createdAt: -1 } }, function(err, data) {
    res.json(data);
  });
};
