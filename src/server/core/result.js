const Result = require('../models/result.js')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

module.exports = {
  mock : (req,res) => {
    const mock = require("../mocks/result.js")
    Result.create(mock,
    function (err, games) {
      if (err) res.status(500).send(err)
      res.status(200).send(games)
    });
  },
  set : (req,res) => {
    try {
      Result.create(JSON.parse(req.body.results),
      function (err, obj) {
        if (err) return res.status(500).send(err)
        res.status(200).send(obj)
      });
    } catch(err){
      return res.status(500).send(err.message)
    }

  },
  get : (req,res) => {
    let params = req.params
    console.log(params)
    Result.findOne(
      {'$and' : [
        params._id ? {_id : params._id} : {}, // userId vaut saut req.params.uid , soit token.decoded.userId
        params.after ? {playedAt : {'$gte' : params.after}} : {},
        params.before ? {playedAt : {'$lte' : params.before}} : {},
      ]}).then((results)=>{
        res.status(200).send(results)
      }).catch(err => res.status(500).send(err))
  }
}
