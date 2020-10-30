const Site = require("../models/Site");
const webData = require("../static/webdata.const");
module.exports = (req, res) => {
  Site.create(
    {
      ...webData
    },
    (error, siteData) => {
      if (error) res.json(error);
      else res.json(siteData);
    }
  );
};
