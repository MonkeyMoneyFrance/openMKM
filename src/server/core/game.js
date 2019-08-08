const Game = require('../models/game.js')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

module.exports = {

  set : (req,cellar,cellarId=new ObjectId()) => {
    return new Promise((resolve,reject) => {
      Game.findOneAndUpdate({'$and' : [
        {_id : cellarId},
        {userId : req.decoded.userId}
      ]},{...cellar,userId:req.decoded.userId},{new: true,upsert:true}).then((results)=>{
        console.log(results)
        resolve(results)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  get : (req,res) => {
    return new Promise((resolve,reject) => {
      // let and = [
      //   {cellarId : {'$in' : req.cellars}}, // userId vaut saut req.params.uid , soit token.decoded.userId
      //   {'$or' : [
      //     {domain : new RegExp(search, "gi")},
      //     {region : new RegExp(search, "gi")},
      //     {appelation : new RegExp(search, "gi")} ,
      //     {country : new RegExp(search, "gi")}
      //   ]}
      // ]

      Game.findOne({_id:new ObjectId("5d4ad4341c9d4400007ff577")}).then((results)=>{
          res.status(200).send(results)
        }).catch(err => reject(err))
    })
  },
  delete : (req,cellars) => {
    return new Promise((resolve,reject) => {
      Game.deleteMany(
        {'$and' : [
          {userId : req.decoded.userId}, // userId vaut saut req.params.uid , soit token.decoded.userId
          {_id:{ '$in' : cellars}}   // get all belongs to userId...
        ]}).then((results)=>{
          resolve(results)
        }).catch(err => reject(err))

    })
  }
}
