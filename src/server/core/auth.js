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
  askForConfirmation : (req,id,email) => {
    return new Promise(async (resolve,reject) => {
      try {
        let passwordToken = await createResetPasswordToken(id)
        await sendConfirmMail(req.hostname,email,id,passwordToken)
        console.log('DID SEND MSG')
        resolve()
      } catch (err) {
        console.log(err)
        reject(err)
      }
    })
  },
  confirmMail : (_id) => {
    return new Promise(function(resolve,reject){

      Auth.updateOne({_id : new  ObjectId(_id)},{
         '$set': {"emailProvider.verify" : true}
      }).then(update => {
        console.log(update)
        resolve()
      }).catch((err)=>{
        console.log("User not found, error: "+err)
        reject("User not found, error: "+err)
        return;
      })
    })
  },
  resetPass : (_id,password) => {
    return new Promise(function(resolve,reject){
      Auth.findOne({_id:new  ObjectId(_id)}).then(auth => {
        auth.emailProvider =  {...auth.emailProvider,password}
        auth.save(function(err){
          if(err) return reject(err)
          resolve();
        })
      }).catch((err)=>{
        console.log("User not found, error: "+err)
        reject("User not found, error: "+err)
        return;
      })
    })
  },
  findEmail : (email) => {
    return new Promise((resolve,reject) => {
      Auth.findOne({'$and' : [
        {email},
        {emailProvider : {$exists:true}}
      ] }).then((user)=>{
        if (user == null){
          resolve() //no user with this email
        }
        else{
          resolve(user._id)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  findAuth : (req = {}) => {
    let {email} = req
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

  delete : (email) => {
    return new Promise(function(resolve,reject){
      Auth.findOneAndRemove({email}).then((response)=>resolve(response))
      .catch((error)=>reject(error))
    })
  }



}
