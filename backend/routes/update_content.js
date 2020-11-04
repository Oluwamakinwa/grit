const Site = require("../models/Site");
module.exports = (req, res) => {
  const { websiteData } = req.body;
  console.log(websiteData);
  Site.create(
    {
      ...websiteData
    },
    (error, siteData) => {
      if (error) res.json(error);
      else res.json(siteData);
    }
  );
};
