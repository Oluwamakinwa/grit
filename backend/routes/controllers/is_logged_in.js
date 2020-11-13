module.exports = (req, res) => {
  res.status(200);
  res.json({ logged_in: !!req.session.loggedIn });
};
