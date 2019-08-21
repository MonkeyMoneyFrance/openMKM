const Team = require('../models/team.js')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  mock : (req,res) => {
    const mock = require("../mocks/team.js")
    Team.create(mock,
    function (err, teams) {
      if (err) res.status(500).send(err)
      res.status(200).send(teams)
    });
  },
  set : (req,res) => {
      const team = (req.body||{}).team
      Team.findOneAndUpdate({'$and' : [
        {_id : cellarId},
      ]},{...team},{new: true,upsert:true}).then((results)=>{
        resolve(results)
      }).catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  },
  get : (req,res) => {
      const params = req.query || {}
      Team.find(
        {'$and' : [
          params._id ? {teamId : params._id} : {}, // userId vaut saut req.params.uid , soit token.decoded.userId
          params.after ? {playedAt : {'$gte' : params.after}} : {},
          params.before ? {playedAt : {'$lte' : params.before}} : {},
        ]
      }).then((results)=>{
        console.log(results)
          res.status(200).send(results)
      }).catch(err => res.status(500).send(err))
  },
  delete : (req,cellars) => {
    return new Promise((resolve,reject) => {
      Team.deleteMany(
        {'$and' : [
          {userId : req.decoded.userId}, // userId vaut saut req.params.uid , soit token.decoded.userId
          {_id:{ '$in' : cellars}}   // get all belongs to userId...
        ]}).then((results)=>{
          resolve(results)
        }).catch(err => reject(err))

    })
  }
}
