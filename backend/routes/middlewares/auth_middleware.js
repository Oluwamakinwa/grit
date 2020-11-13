module.exports = (req, res, next) => {
  if (req.session.loggedIn) {
    next(); //If session exists, proceed to page
  } else {
    res.status(400);
    res.json({ message: "Not logged in!" });
    //Error, trying to access unauthorized page!
  }
};
