const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config')

const authMiddleware = (req,res,next) => {
  const authHeader = req.headers.authorization;

  try {
    if(authHeader){
      const token = authHeader.split(" ")[1];

      jwt.verify(token, JWT_SECRET, (err, user) => {
          if(err){
            return res.status(403)
          }
          req.user = user
          next();
      })
  }else{
      return res.status(401).json("Not authenticated!")
  }
  } catch (error) {
    console.log(error);
  }
}


  module.exports = authMiddleware;