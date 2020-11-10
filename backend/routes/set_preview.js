const Preview = require("../models/Preview");
module.exports = (req, res) => {
  const { websiteData } = req.body;
  console.log(websiteData);
  Preview.create(
    {
      ...websiteData
    },
    (error, siteData) => {
      if (error) res.json(error);
      else res.json(siteData);
    }
  );
};
