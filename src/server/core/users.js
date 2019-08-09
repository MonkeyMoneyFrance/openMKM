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
  create : (params) => {
      User.create(JSON.parse(params),
      function (err, users) {
        if (err) res.status(500).send(err)
        res.status(200).send(users)
      });
  },
  set : (req,res) => {
    const params = req.query || {}
    const user = (req.body||{}).user
    User.findOneAndUpdate({'$and' : [
      params.userId ? {_id:params.userId} : {}, // userId vaut saut req.params.uid , soit token.decoded.userId
    ]}
    ,user
    ,{new: true}).then((user)=>{
        res.status(200).send(user)
    }).catch(err => res.status(500).send(err))
  },
  get : (req,res) => {
    const params = req.query || {}
    console.log(params)

    User.find({'$and' : [
      params.teamId ? {teams : { $elemMatch: { teamId: params.teamId} }} : {}, // userId vaut saut req.params.uid , soit token.decoded.userId
    ]}).then((users)=>{

      res.status(200).send(users) // no need to store in a {}
    }).catch(err => res.status(500).send(err))
  },
  delete : (params) => {
    return new Promise((resolve,reject) => {

    })
  }
}
