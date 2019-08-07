const Match = require('../models/match.js')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

module.exports = {

  // set : (req,res) => {
  //   return new Promise((resolve,reject) => {
  //     let match = req.match
  //     Match.findOneAndUpdate({'$and' : [
  //       {_id : cellarId},
  //       {userId : req.decoded.userId}
  //     ]},{...cellar,userId:req.decoded.userId},{new: true}).then((results)=>{
  //       console.log(results)
  //       resolve(results)
  //     }).catch(err => {
  //       console.log(err)
  //       reject(err)
  //     })
  //   })
  // },
  createMatch : (req,res) => {
    try {
      Match.create(JSON.parse(req.body.matchs),
      function (err, obj) {
        if (err) return res.status(500).send(err)
        res.status(200).send(obj)
      });
    } catch(err){
      return res.status(500).send(err.message)
    }

  },
  fetchMatch : (req,res) => {
    let params = req.params
    console.log(params)
    Match.find(
      {'$and' : [
        params._id ? {_id : params._id} : {}, // userId vaut saut req.params.uid , soit token.decoded.userId
        params.after ? {playedAt : {'$gte' : params.after}} : {},
        params.before ? {playedAt : {'$lte' : params.before}} : {},
        // params.before ? {_id:cellarId} : {_id : { '$in' : req.cellars}}   // get all belongs to userId...
      ]}).then((matchs)=>{
        console.log(matchs)
        res.status(200).send(matchs)
      }).catch(err => res.status(500).send(err))
  },
  // delete : (req,cellars) => {
  //   return new Promise((resolve,reject) => {
  //     Cellar.deleteMany(
  //       {'$and' : [
  //         {userId : req.decoded.userId}, // userId vaut saut req.params.uid , soit token.decoded.userId
  //         {_id:{ '$in' : cellars}}   // get all belongs to userId...
  //       ]}).then((results)=>{
  //         resolve(results)
  //       }).catch(err => reject(err))
  //
  //   })
  // }
}
