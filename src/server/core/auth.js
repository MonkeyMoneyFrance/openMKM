const Auth = require('../models/auth.js')
const Joi = require('@hapi/joi')
const passport = require('passport')
const FacebookStrategy =require('passport-facebook').Strategy;
const {signRequestToken} = require('../routes/middlewares')

const schema = Joi.object().keys({
    userId: Joi.string().alphanum().min(1).max(30),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    email: Joi.string().email({ minDomainSegments: 2 }).required()
});


module.exports = {
  findAuth : (req = {}) => {
    let {email} = req
    // console.log(email,)
    return new Promise((resolve,reject) => {
      let validation = schema.validate({ email })
      if (validation.error){
        return reject('wrong schema validation')
      }
      Auth.findOne({email}).then((user)=>{
        console.log(user)
        resolve(user)
      }).catch(err => {
        reject(err)
      })
    })
  },
  facebookAuth : (profile,accessToken) => {
    return new Promise((resolve,reject) => {
          Auth.findOne({
                'facebookProvider.id': profile.id
          }, function(err, auth) {
            if (err) reject(err)
            // no user was found, lets create a new one
            if (!auth) {
              console.log(profile)
                  Auth.create({
                        email: profile.emails[0].value,
                        // userId : userId,
                        name : profile.displayName,
                        facebookProvider: {
                              id: profile.id,
                              token: accessToken
                        }
                  },{new:true,upsert:true}).then((createdAuth)=>{
                    const token = signRequestToken({userId:createdAuth._id.toString()})
                    resolve({...profile,token,userId:createdAuth._id.toString(),accessToken})
                  }).catch((error)=>{
                    console.log(error)
                    reject(error)
                  })
            } else {
              const token = signRequestToken({userId:auth._id.toString()})
              resolve({...profile,token,userId:auth._id.toString(),accessToken})
            }
          });
    })
  },
  delete : (email) => {
    return new Promise(function(resolve,reject){
      Auth.findOneAndRemove({email}).then((response)=>resolve(response))
      .catch((error)=>reject(error))
    })
  }



}
