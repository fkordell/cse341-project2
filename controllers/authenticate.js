const authUserLogin = (req, res, next) => {
    if (!req.oidc.isAuthenticated()) {
      return res.status(401).send({
        error: "Unauthorized: Please login to make changes!",
        login:
          "You can log in at: https://cse341-project2-h8z8.onrender.com/login",
      });
    }
    next();
  };
  
  module.exports = { authUserLogin };