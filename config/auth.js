// server/config/auth.js
module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret', // Fallback to a default secret
    jwtExpiration: '1h', // Token expiration time
  };