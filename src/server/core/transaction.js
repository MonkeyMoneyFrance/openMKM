const Transaction = require('../models/transaction.js')

module.exports = {
  // mock : (req,res) => {
  //   const mock = require("../mocks/transaction.js")
  //   Transaction.create(mock,
  //   function (err, transaction) {
  //     if (err) res.status(500).send(err)
  //     res.status(200).send(transaction)
  //   });
  // },
  create : (req,res) => {
    console.log('COUOU')
      Transaction.create((req.body.transactions),
      function (err, transactions) {
        console.log(err)
        if (err) res.status(500).send({err})
        console.log(transactions)
        res.status(200).send(transactions)
      });
  },
  set : (req,res) => {
    const params = req.params || {}
    const transaction = req.body||{}
    Transaction.findOneAndUpdate({'$and' : [
      params._id ? {_id:params._id} : {}, // transactionId vaut saut req.params.uid , soit token.decoded.transactionId
    ]}
    ,transaction
    ,{new: true}).then((transaction)=>{
        res.status(200).send([transaction])
    }).catch(err => res.status(500).send(err))
  },
  get : (req,res) => {
    const params = req.query || {}
    Transaction.find({'$and' : [
      params._id ? {_id:params._id} : {},
      params.to ? {to:params.to} : {},
      params.from ? {to:params.from} : {},
    ]}).then((transactions)=>{
      console.log(transactions)
      res.status(200).send(transactions) // no need to store in a {}
    }).catch(err => res.status(500).send(err))
  },
  delete : (params) => {
    return new Promise((resolve,reject) => {

    })
  }
}
