const User = require('../models/user.js')

module.exports = {
  mock : (req,res) => {
    const mock = require("../mocks/user.js")
    User.create(mock,
    function (err, user) {
      if (err) res.status(500).send(err)
      res.status(200).send(user)
    });
  },
  create : (req,res) => {
      User.create((req.body.users),
      function (err, users) {
        if (err) res.status(500).send({err})
        res.status(200).send(users)
      });
  },
  set : (req,res) => {
    const params = req.params || {}
    const user = req.body||{}
    User.findOneAndUpdate({'$and' : [
      params._id ? {_id:params._id} : {}, // userId vaut saut req.params.uid , soit token.decoded.userId
    ]}
    ,user
    ,{new: true}).then((user)=>{
        res.status(200).send([user])
    }).catch(err => res.status(500).send(err))
  },
  get : (req,res) => {
    const params = req.query || {}
    User.find({'$and' : [
      params.text ? {'$or' : [
        {firstName : new RegExp(params.text, "gi")},
        {lastName : new RegExp(params.text, "gi")}
      ]} : {}
    ]}).then((users)=>{
      res.status(200).send(users) // no need to store in a {}
    }).catch(err => res.status(500).send(err))
  },
  delete : (params) => {
    return new Promise((resolve,reject) => {

    })
  }
}
