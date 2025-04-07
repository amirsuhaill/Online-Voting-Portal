// server/middleware/auth.js
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/auth');

const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = jwt.verify(token, jwtSecret);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
};

module.exports = auth;