const verif = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  const { email, password } = req.body;
  if (email.length === 0 || password.length === 0) {
    return res
    .status(400)
    .json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = verif;
