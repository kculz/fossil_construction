const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config')

function authMiddleware(req,res,next){
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

function verifyAdmin(req, res, next){
  authMiddleware(req, res, ()=> {
    if(req.user.idAdmin || req.user){
      next();
    }else{
      return res.status(403).json("You are restricted to perform this action.")
    }
  })
}

  module.exports = {authMiddleware, verifyAdmin};