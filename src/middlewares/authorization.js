const authorizationCheck = (req, res, next) => {
  if (req.body.email === 'admin@gmail.com' && req.body.password === 'admin@password.com') {
    next();
  } else {
    res.status(403).send('Un Authorize');
  }
};

module.exports = authorizationCheck;
