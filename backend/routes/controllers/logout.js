module.exports = (req, res) => {
  delete req.session.loggedIn;
  res.status(200);
  res.json({ message: "Logged out successfully" });
};
