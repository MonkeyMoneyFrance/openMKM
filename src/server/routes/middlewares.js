const bcrypt = require('bcrypt');

module.exports = {
  isAllowed: function(req,res,next){
    if (!req.user){
      console.log('NO TOKEN PROVIDED')
      return res.status(403).send({
          "error": true,
          "message": 'No token provided.'
      });
    }
    next()
  },
  isAdmin: function(req,res,next){
    if (req.decoded.admin == true) {
      next()
    } else {
      return res.status(403).json({"status":403, "message": 'Unauthorized access.' })
    }
  },
  comparePassword : function(candidatePassword,password){
    return new Promise((resolve,reject)=>{
      bcrypt.compare(candidatePassword,password)
      .then( isMatch => {
        resolve(isMatch)
      })
      .catch(err => reject(err))
    })
  },
  hashPassword : function(password) {
    return new Promise((resolve,reject) => {
      console.log(password,10)
      bcrypt.hash(password,10).then((hashedPassword) => {
         resolve(hashedPassword);
     }).catch(err=>reject(err))
    })
  },
}
