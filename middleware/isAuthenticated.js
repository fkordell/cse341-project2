function isAuthenticated(req, res, next) {
  if (req.oidc.isAuthenticated()) {
      return next();
  }
  res.status(401).json({ message: 'User is not authenticated' });
}

module.exports = isAuthenticated;

  