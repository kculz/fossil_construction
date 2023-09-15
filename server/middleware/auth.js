const jwt = require('jsonwebtoken');
const {User} = require('../models');
const { JWT_SECRET } = require('../config')

function authMiddleware(req, res, next) {
    const token = req.header('Authorization');
  
    // Check if the token exists
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
  
    try {
      // Verify the token
      const decoded = jwt.verify(token, JWT_SECRET);
  
      // Find the user by the decoded user ID
      const user = User.findByPk(decoded.userId);
      if (!user) {
        return res.status(401).json({ message: 'Invalid token.' });
      }
  
      // Attach the user object to the request for further use
      req.user = user;
  
      // Move to the next middleware or route handler
      next();
    } catch (error) {
      console.error('Error authenticating user:', error);
      return res.status(401).json({ message: 'Invalid token.' });
    }
  }

  module.exports = authMiddleware;